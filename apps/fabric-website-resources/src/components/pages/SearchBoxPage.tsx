import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { SearchBoxPageProps } from 'office-ui-fabric-react/lib/components/SearchBox/SearchBox.doc';

export const SearchBoxPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...SearchBoxPageProps, ...props }} />
);
