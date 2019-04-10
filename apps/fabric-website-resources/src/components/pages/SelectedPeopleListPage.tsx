import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { SelectedPeopleListPageProps } from 'office-ui-fabric-react/lib/components/SelectedItemsList/SelectedPeopleList/SelectedPeopleList.doc';

export const SelectedPeopleListPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SelectedPeopleListPageProps, ...props }} />;
