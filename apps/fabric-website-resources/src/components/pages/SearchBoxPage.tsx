import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { SearchBoxPageProps } from 'office-ui-fabric-react/lib/components/SearchBox/SearchBox.doc';

export const SearchBoxPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...SearchBoxPageProps, ...props }} />;
