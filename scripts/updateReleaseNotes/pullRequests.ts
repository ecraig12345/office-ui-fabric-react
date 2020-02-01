import { IPullRequest, IChangelogComment } from './types';
import GitHubApi from '@octokit/rest';
import { repoDetails, github } from './init';

/**
 * Get the single pull request associated with the given changelog entry.
 */
export async function getPullRequest(changelogComment: IChangelogComment): Promise<IPullRequest> {
  const { commit, author: authorEmail } = changelogComment;
  console.log(`Looking for the PR containing ${commit} by ${authorEmail}...`);
  try {
    // Attempt to directly find the PR corresponding to the commit from the change file
    const result = await github.repos.listPullRequestsAssociatedWithCommit({ commit_sha: commit, ...repoDetails });

    // Filter out unmerged PRs, in case the commit has been in multiple PRs but only one got merged
    // (check merged_at because that's only set if the PR has been merged, whereas merge_commit_sha
    // is set even for un-merged PRs, to the most recent intermediate merge)
    const prs = result.data.filter(result => !!result.merged_at);
    if (prs.length > 1) {
      // In case the commit was in PRs to multiple branches or something?
      console.warn(`Multiple PRs found for ${commit}:`);
      console.warn(prs.map(pr => `  ${pr.url}`).join('\n'));
    }

    if (prs[0]) {
      console.log(`Found matching PR #${prs[0].number}.\n`);
      return processPr(prs[0]);
    }
  } catch (ex) {
    console.warn(`Error finding PR for ${commit} (will now try backup approach): ${ex}`);
  }

  // Backup approach: check recent PRs for a commit with a matching message and author
  // (the commit referenced in the change file might not directly exist in a PR if the PR was rebased)
  console.log(`Could not find a PR matching ${commit}.`);
  console.log("Checking for a commit with a matching message in the author's recent PRs instead...");
  return getMatchingRecentPullRequest(changelogComment);
}

/**
 * Look for a commit with a matching message and author among the recent PRs.
 */
async function getMatchingRecentPullRequest(changelogComment: IChangelogComment): Promise<IPullRequest | null> {
  const { author: authorEmail, commit: commitHash } = changelogComment;
  let possiblePrs: IPullRequest[] = [];
  let message: string;
  let author: string;
  try {
    // Get info about the commit to find the message and author (GH username) to match
    // (need to get the GH username since it's not possible to search by email)
    const commitResponse = await github.repos.getCommit({ ref: commitHash, ...repoDetails });
    if (commitResponse.data.author) {
      author = commitResponse.data.author.login;
      message = commitResponse.data.commit.message;
    } else {
      console.warn(`No author data available for ${commitHash}`);
    }
  } catch (ex) {
    console.warn(`Error getting commit ${commitHash}: ${ex}`);
  }

  try {
    if (author) {
      // Get this author's recent PRs and look for one or more with a matching commit message and email
      possiblePrs = (await getRecentPrsByAuthor(author)).filter(pr =>
        pr.commits.some(commit => commit.message === message && commit.authorEmail === authorEmail)
      );
    }
  } catch (ex) {
    console.warn(`Error getting recent PRs by ${author}: ${ex}`);
  }

  const commitDescription = `message "${message}" by ${authorEmail} (from ${commitHash})`;
  if (possiblePrs.length === 1) {
    console.log(`Found PR #${possiblePrs[0].number} containing a commit with ${commitDescription}\n`);
    return possiblePrs[0];
  } else if (possiblePrs.length > 1) {
    // This is an iffy way of finding the matching PR anyway, so if multiple PRs match, don't use any
    console.warn(`Multiple PRs found containing a commit with ${commitDescription}:`);
    console.warn(possiblePrs.map(pr => `  ${pr.url}`).join('\n'));
    console.warn('Not using any of them to avoid showing incorrect data.\n');
  } else {
    console.warn(`No PRs found for ${commitHash} (changelog message: "${changelogComment.comment}")\n`);
  }
  return null;
}

const _recentPrsByAuthor: { [author: string]: IPullRequest[] } = {};

/**
 * Get the most recently updated merged PRs from the given author.
 * @param author - Author username (not email)
 * @param count - Number of PRs to fetch, default 10
 */
async function getRecentPrsByAuthor(author: string, count: number = 10): Promise<IPullRequest[]> {
  if (!_recentPrsByAuthor[author]) {
    try {
      // Get the author's 10 most recently updated merged PRs
      console.log(`Getting ${count} most recent PRs by ${author}...`);
      // (this is not quite the right type, since merge_commit_sha doesn't exist on the real response)
      /** @type {GitHubApi.PullsGetResponse[]} */
      const result = (
        await github.search.issuesAndPullRequests({
          q: ['type:pr', 'is:merged', 'author:' + author, 'user:' + repoDetails.owner, 'repo:' + repoDetails.repo].join('+'),
          sort: 'updated',
          order: 'desc',
          per_page: count
        })
      ).data.items;

      // Add commit info
      const prs = result.map(processPr);
      await addCommitInfo(prs);

      _recentPrsByAuthor[author] = prs;
    } catch (ex) {
      console.warn(`Error getting recent PRs by ${author}: ${ex}`);
      _recentPrsByAuthor[author] = [];
    }
  }
  return _recentPrsByAuthor[author];
}

let _recentPrs;

/**
 * Get the 50 most recently updated pull requests, including the list of commits.
 */
async function loadRecentPullRequests(): Promise<IPullRequest[]> {
  if (!_recentPrs) {
    console.log('Loading the 50 most recent PRs to check for a matching commit (this may take awhile but only happens once)...');

    try {
      // Get the most recent 50 pull requests
      const result = await github.pulls.list({ state: 'closed', sort: 'updated', direction: 'desc', per_page: 50, ...repoDetails });
      /** @type {IPullRequest[]} */
      const prs = result.data
        .filter(result => !!result.merged_at) // Remove un-merged PRs
        .map(processPr);
      await addCommitInfo(prs);

      _recentPrs = prs;
    } catch (ex) {
      console.warn('Error getting recent PRs: ' + ex);
      _recentPrs = [];
    }
  }
  return _recentPrs;
}

/**
 * For each pull request, fetch its list of commits and add it to the object.
 */
async function addCommitInfo(prs: IPullRequest[]) {
  for (const pr of prs) {
    console.log(`  Getting commits for #${pr.number}...`);
    try {
      const commits = await github.pulls.listCommits({ pull_number: pr.number, ...repoDetails });
      pr.commits = commits.data
        .filter(commit => !!commit.author)
        .map(commit => ({
          commit: commit.sha,
          message: commit.commit.message,
          author: commit.author.login,
          authorEmail: commit.commit.author.email
        }));
    } catch (ex) {
      // ignore
    }
  }
}

/**
 * Convert a GitHub API response to an IPullRequest
 */
function processPr(pr: GitHubApi.PullsGetResponse | GitHubApi.ReposListPullRequestsAssociatedWithCommitResponseItem): IPullRequest {
  return {
    number: pr.number,
    url: pr.html_url,
    author: pr.user.login,
    authorUrl: pr.user.html_url
  };
}
