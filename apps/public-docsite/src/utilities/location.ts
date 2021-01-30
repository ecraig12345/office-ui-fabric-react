const hostname = typeof window === 'undefined' ? undefined : window.location.hostname;

/**
 * Determines whether the site is hosted on the Office Developer portal, which
 * has the Universal Header and Footer (UHF).
 */
export const hasUHF: boolean = hostname
  ? hostname === 'developer.microsoft.com' || hostname === 'developer.microsoft-tst.com'
  : false;

/**
 * Determines if the site is running locally.
 */
export const isLocal: boolean = hostname
  ? hostname === 'localhost' || hostname === '[::]' || hostname.indexOf('ngrok.io') > -1
  : false;
