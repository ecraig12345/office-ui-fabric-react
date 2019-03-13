import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { DialogPageProps } from 'office-ui-fabric-react/lib/components/Dialog/Dialog.doc';

export const DialogPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...DialogPageProps, ...props }} />
);
