import * as React from 'react';
import { KeytipLayer } from 'office-ui-fabric-react/lib/KeytipLayer';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { KeytipsPageProps } from 'office-ui-fabric-react/lib/components/Keytip/Keytips.doc';

export const KeytipsPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <div>
    <DemoPage {...{ ...KeytipsPageProps, ...props }} />
    <KeytipLayer content="Alt Windows" />
  </div>
);
