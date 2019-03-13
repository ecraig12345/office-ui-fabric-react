import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { ContextualMenuPageProps } from 'office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.doc';

export const ContextualMenuPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ContextualMenuPageProps, ...props }} />
);
