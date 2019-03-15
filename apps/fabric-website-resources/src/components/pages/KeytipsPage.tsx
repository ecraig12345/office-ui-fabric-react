import * as React from 'react';
import { KeytipLayer } from 'office-ui-fabric-react/lib/KeytipLayer';

import { DemoPage } from '../DemoPage';

import { KeytipsPageProps } from 'office-ui-fabric-react/lib/components/Keytip/Keytips.doc';

export const KeytipsPage = (props: { isHeaderVisible: boolean }) => (
  <div>
    <DemoPage
      jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Keytip.page.json')}
      {...{ ...KeytipsPageProps, ...props }}
    />
    <KeytipLayer content="Alt Windows" />
  </div>
);
