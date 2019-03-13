import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { ModalPageProps } from 'office-ui-fabric-react/lib/components/Modal/Modal.doc';

export const ModalPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ModalPageProps, ...props }} />
);
