import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';

import { FacepilePageProps } from 'office-ui-fabric-react/lib/components/Facepile/Facepile.doc';

export const FacepilePage = (props: Partial<IDemoPageProps>) => <DemoPage {...{ ...FacepilePageProps, ...props }} />;
