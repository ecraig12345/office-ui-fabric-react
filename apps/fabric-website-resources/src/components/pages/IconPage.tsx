import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { IconPageProps } from 'office-ui-fabric-react/lib/components/Icon/Icon.doc';

export const IconPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Icon.page.json')} {...{ ...IconPageProps, ...props }} />
);
