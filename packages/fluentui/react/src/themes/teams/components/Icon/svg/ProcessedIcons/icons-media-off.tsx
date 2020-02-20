import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <path d="M8.852 8.148C8.752 8.05 8.636 8 8.5 8s-.253.05-.352.148A.483.483 0 0 0 8 8.5c0 .136.05.253.148.352L10.297 11H9.82c-.542 0-.966.281-1.273.844-.23.432-.388 1.039-.477 1.82-.047.428-.07.99-.07 1.687v1.297c0 .694.023 1.253.07 1.68.09.792.247 1.398.477 1.82.307.569.731.852 1.273.852h7.68c.198 0 .387-.04.566-.117s.343-.19.489-.336c.14-.14.25-.301.328-.48.053-.123.082-.251.098-.382l4.167 4.167c.094.099.211.148.352.148s.258-.05.352-.148A.481.481 0 0 0 24 23.5a.483.483 0 0 0-.148-.352l-15-15zM18 19.5c0 .136-.05.253-.148.351A.477.477 0 0 1 17.5 20H9.82c-.145 0-.265-.083-.36-.25-.192-.328-.317-.833-.374-1.516A17.156 17.156 0 0 1 9 16.515V15.476c0-.234.008-.5.023-.797.032-.765.097-1.36.196-1.789.14-.593.34-.89.601-.89h1.477L18 18.703v.797zM23.852 12.148c-.099-.098-.216-.148-.352-.148s-.25.047-.344.14l-2.531 2.415a1.988 1.988 0 0 0-.46.66 1.957 1.957 0 0 0 0 1.57c.109.253.262.473.46.66l2.531 2.414c.094.094.208.14.344.14s.253-.048.352-.147A.481.481 0 0 0 24 19.5v-7a.484.484 0 0 0-.148-.352zM23 18.328l-1.688-1.61a.988.988 0 0 1 0-1.437L23 13.671v4.657zM17.5 12c.136 0 .253.05.352.148.098.1.148.217.148.352v3.39l1 1V12.5c0-.197-.04-.387-.117-.567s-.188-.341-.328-.488c-.146-.14-.309-.25-.489-.328S17.698 11 17.5 11h-4.391l1 1H17.5z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec;
