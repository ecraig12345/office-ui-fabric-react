import * as React from 'react';
import { KeytipLayer } from 'office-ui-fabric-react/lib/KeytipLayer';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { KeytipsPageProps } from 'office-ui-fabric-react/lib/components/Keytip/Keytips.doc';

export const KeytipsPage = (props: Partial<IDemoPageProps>) => (
  <div>
    <DemoPage {...{ ...KeytipsPageProps, ...props }} />
    <KeytipLayer content="Alt Windows" />
  </div>
);
