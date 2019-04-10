import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { RatingPageProps } from 'office-ui-fabric-react/lib/components/Rating/Rating.doc';

export const RatingPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...RatingPageProps, ...props }} />;
