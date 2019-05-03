/**
 * Determines whether the site is hosted on the Office Developer portal, which
 * has the Universal Header and Footer (UHF).
 */
export const hasUHF: boolean =
  window.location.hostname === 'developer.microsoft.com' || window.location.hostname === 'developer.microsoft-tst.com';

/**
 * Determines if the site is running locally.
 */
export const isLocal: boolean = window.location.hostname === 'localhost' || window.location.hostname.indexOf('ngrok.io') > -1;

/** URL for the Fabric GitHub repo */
export const repoUrl = 'https://github.com/OfficeDev/office-ui-fabric-react/tree/master';
/** URL for the fabric-website package within the Fabric GitHub repo */
export const websiteRepoUrl = repoUrl + '/apps/fabric-website/';
/** URL for the office-ui-fabric-react package within the Fabric GitHub repo */
export const oufrRepoUrl = repoUrl + '/packages/office-ui-fabric-react';
