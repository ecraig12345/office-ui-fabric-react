import * as React from 'react';
import { DemoPage } from '../../DemoPage';
import { IDemoPageProps } from '../../DemoPage.types';
import { DetailsListNavigatingFocusPageProps } from 'office-ui-fabric-react/lib/components/DetailsList/DetailsList.doc';

export const DetailsListNavigatingFocusPage = (props: Partial<IDemoPageProps>) => (
  <DemoPage {...{ ...DetailsListNavigatingFocusPageProps, ...props }} />
);
