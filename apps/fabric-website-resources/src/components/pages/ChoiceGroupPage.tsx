import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { ChoiceGroupPageProps } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.doc';

export const ChoiceGroupPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...ChoiceGroupPageProps, ...props }} />;
