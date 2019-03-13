import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { MessageBarPageProps } from 'office-ui-fabric-react/lib/components/MessageBar/MessageBar.doc';

export const MessageBarPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...MessageBarPageProps, ...props }} />
);
