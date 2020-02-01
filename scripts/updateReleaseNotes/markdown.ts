import { IChangelogEntry, IChangelogComment } from './types';
import { repoDetails } from './init';
import { getPullRequest } from './pullRequests';

const EOL = '\n';

/**
 * Build up the markdown from the entry description.
 * This includes fetching info about relevant pull requests, which can be slow/expensive.
 */
export async function getMarkdownForEntry(entry: IChangelogEntry): Promise<string> {
  const comments =
    (await getChangeComments('Breaking changes', entry.comments.major)) +
    (await getChangeComments('Minor changes', entry.comments.minor)) +
    (await getChangeComments('Patches', entry.comments.patch));

  return (comments || '*Changes not tracked*') + EOL + EOL;
}

/**
 * Gets the release notes markdown corresponding to the comment array.
 * @param title - Section title (probably change type, major/minor/patch)
 * @param comments - Changelog comments for a version
 */
async function getChangeComments(title: string, comments: IChangelogComment[]): Promise<string> {
  if (comments) {
    const lines = ['## ' + title, ''];
    for (const comment of comments) {
      let line = `- ${comment.comment} (`;
      if (comment.commit) {
        // Prefer linking to the PR if we can find it (this is generally more useful than the commit)
        const pr = await getPullRequest(comment);
        if (pr) {
          line += `PR #${pr.number} by [${pr.author}](${pr.authorUrl})`;
        } else {
          line += `[commit](https://github.com/${repoDetails.owner}/${repoDetails.repo}/commit/${comment.commit})`;
        }

        line += `)`;
      }
      lines.push(line);
    }
    lines.push('', '');
    return lines.join(EOL);
  }
  return '';
}
