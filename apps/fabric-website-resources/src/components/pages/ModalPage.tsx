import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { ModalPageProps } from 'office-ui-fabric-react/lib/components/Modal/Modal.doc';

export const ModalPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ModalPageProps, ...props }} />;
