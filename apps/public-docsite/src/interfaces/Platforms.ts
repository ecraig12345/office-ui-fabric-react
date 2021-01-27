import { TPlatformPageProps } from '@fluentui/react-docsite-components';

export enum Platforms {
  /** 'default' will be used when there are no platforms for the relevant page/area. */
  default = 'default',
  web = 'web',
  ios = 'ios',
  android = 'android',
  mac = 'mac',
  windows = 'windows',
  cross = 'cross',
}

export type TFabricPlatformPageProps = TPlatformPageProps<Platforms>;
