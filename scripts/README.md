# @uifabric/build - UI Fabric build scripts

## Dependencies

This section lists dependencies which must be included in package.json for non-obvious reasons.

- jest-environment-jsdom: needed by jest-cli (declared as dep but inline-required)

@microsoft/load-themed-styles: needed anywhere scss is built

    "rxjs": "~6.3.3",
