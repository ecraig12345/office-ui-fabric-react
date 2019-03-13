import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { DocumentCardPageProps } from 'office-ui-fabric-react/lib/components/DocumentCard/DocumentCard.doc';

export const DocumentCardPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DocumentCardPageProps, ...props }} />
);
