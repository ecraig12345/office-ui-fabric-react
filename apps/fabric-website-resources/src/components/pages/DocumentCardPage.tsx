import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { DocumentCardPageProps } from 'office-ui-fabric-react/lib/components/DocumentCard/DocumentCard.doc';

export const DocumentCardPage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...DocumentCardPageProps, ...props }} />;
