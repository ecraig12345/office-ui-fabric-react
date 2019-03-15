import * as React from 'react';
import { DemoPage } from '../DemoPage';

import { LabelPageProps } from 'office-ui-fabric-react/lib/components/Label/Label.doc';

export const LabelPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage jsonDocs={require('../../../../../common/pages/office-ui-fabric-react/Label.page.json')} {...{ ...LabelPageProps, ...props }} />
);
