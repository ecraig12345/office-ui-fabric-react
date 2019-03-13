import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { RatingPageProps } from 'office-ui-fabric-react/lib/components/Rating/Rating.doc';

export const RatingPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...RatingPageProps, ...props }} />
);
