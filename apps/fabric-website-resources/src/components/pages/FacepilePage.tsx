import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';

import { FacepilePageProps } from 'office-ui-fabric-react/lib/components/Facepile/Facepile.doc';

export const FacepilePage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...FacepilePageProps, ...props }} />
);
