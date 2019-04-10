import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { ComboBoxPageProps } from 'office-ui-fabric-react/lib/components/ComboBox/ComboBox.doc';

export const ComboBoxPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ComboBoxPageProps, ...props }} />;
