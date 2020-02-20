import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg viewBox="8 8 16 16" role="presentation" className={classes.svg} focusable="false">
      <path
        className={cx(teamsIconClassNames.outline, classes.outlinePart)}
        d="M15.5,22.5c0,0.14-0.05,0.25-0.15,0.35C15.25,22.95,15.14,23,15,23H9.5c-0.14,0-0.25-0.05-0.35-0.15
            C9.05,22.75,9,22.64,9,22.5V17c0-0.13,0.05-0.25,0.15-0.35c0.1-0.1,0.22-0.15,0.35-0.15c0.14,0,0.25,0.05,0.35,0.15
            C9.95,16.75,10,16.87,10,17v4.29l4.15-4.14c0.1-0.1,0.22-0.15,0.35-0.15c0.14,0,0.25,0.05,0.35,0.15c0.1,0.1,0.15,0.22,0.15,0.35
            c0,0.14-0.05,0.25-0.15,0.35L10.71,22H15c0.14,0,0.25,0.05,0.35,0.15C15.45,22.25,15.5,22.37,15.5,22.5z M23,15
            c0,0.14-0.05,0.25-0.15,0.35c-0.1,0.1-0.22,0.15-0.35,0.15c-0.14,0-0.25-0.05-0.35-0.15C22.05,15.25,22,15.14,22,15v-4.29
            l-4.15,4.14c-0.1,0.1-0.22,0.15-0.35,0.15c-0.14,0-0.25-0.05-0.35-0.15c-0.1-0.1-0.15-0.22-0.15-0.35c0-0.14,0.05-0.25,0.15-0.35
            L21.29,10H16.5c-0.14,0-0.25-0.05-0.35-0.15C16.05,9.75,16,9.64,16,9.5c0-0.14,0.05-0.25,0.15-0.35C16.25,9.05,16.36,9,16.5,9h6
            c0.13,0,0.25,0.05,0.35,0.15C22.95,9.25,23,9.36,23,9.5V15z"
      />
      <path
        className={cx(teamsIconClassNames.filled, classes.filledPart)}
        d="M16,22.5c0,0.14-0.03,0.26-0.08,0.38c-0.05,0.12-0.13,0.23-0.22,0.32c-0.09,0.09-0.2,0.16-0.32,0.22
            c-0.12,0.05-0.25,0.08-0.38,0.08H9.5c-0.14,0-0.26-0.03-0.38-0.08C9,23.36,8.89,23.29,8.8,23.2c-0.09-0.09-0.16-0.2-0.22-0.32
            C8.53,22.76,8.5,22.64,8.5,22.5V17c0-0.13,0.03-0.26,0.08-0.38c0.05-0.12,0.13-0.23,0.22-0.32c0.09-0.09,0.2-0.16,0.32-0.22
            C9.24,16.03,9.36,16,9.5,16c0.13,0,0.26,0.03,0.38,0.08c0.12,0.05,0.23,0.13,0.32,0.22c0.09,0.09,0.16,0.2,0.22,0.32
            c0.05,0.12,0.08,0.25,0.08,0.38v3.09l3.29-3.3c0.09-0.09,0.2-0.17,0.32-0.21c0.12-0.05,0.25-0.07,0.39-0.07
            c0.13,0,0.26,0.03,0.38,0.08c0.12,0.05,0.23,0.13,0.32,0.22c0.09,0.09,0.16,0.2,0.22,0.32c0.05,0.12,0.08,0.25,0.08,0.38
            c0,0.14-0.02,0.27-0.07,0.39c-0.05,0.12-0.12,0.23-0.21,0.32l-3.3,3.29H15c0.13,0,0.26,0.03,0.38,0.08
            c0.12,0.05,0.23,0.13,0.32,0.22c0.09,0.09,0.16,0.2,0.22,0.32C15.97,22.24,16,22.37,16,22.5z M23.5,9.5V15
            c0,0.14-0.03,0.26-0.08,0.38c-0.05,0.12-0.13,0.23-0.22,0.32c-0.09,0.09-0.2,0.16-0.32,0.22C22.76,15.97,22.63,16,22.5,16
            c-0.14,0-0.26-0.03-0.38-0.08c-0.12-0.05-0.23-0.13-0.32-0.22c-0.09-0.09-0.16-0.2-0.22-0.32c-0.05-0.12-0.08-0.25-0.08-0.38v-3.09
            l-3.29,3.3c-0.09,0.09-0.2,0.17-0.32,0.21c-0.12,0.05-0.26,0.07-0.39,0.07c-0.14,0-0.26-0.03-0.38-0.08
            c-0.12-0.05-0.23-0.13-0.32-0.22c-0.09-0.09-0.16-0.2-0.22-0.32c-0.05-0.12-0.08-0.25-0.08-0.38c0-0.14,0.02-0.27,0.07-0.39
            c0.05-0.12,0.12-0.23,0.21-0.32l3.3-3.29H16.5c-0.14,0-0.26-0.03-0.38-0.08c-0.12-0.05-0.23-0.13-0.32-0.22
            c-0.09-0.09-0.16-0.2-0.22-0.32C15.53,9.76,15.5,9.64,15.5,9.5c0-0.13,0.03-0.26,0.08-0.38C15.64,9,15.71,8.89,15.8,8.8
            c0.09-0.09,0.2-0.16,0.32-0.22c0.12-0.05,0.25-0.08,0.38-0.08h6c0.13,0,0.26,0.03,0.38,0.08C23,8.64,23.11,8.71,23.2,8.8
            c0.09,0.09,0.16,0.2,0.22,0.32C23.47,9.24,23.5,9.37,23.5,9.5z"
      />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
