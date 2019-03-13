import * as React from 'react';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { ChoiceGroupPageProps } from 'office-ui-fabric-react/lib/components/ChoiceGroup/ChoiceGroup.doc';

export const ChoiceGroupPage: React.StatelessComponent<IDemoPageBasicProps> = (props: IDemoPageBasicProps) => (
  <DemoPage {...{ ...ChoiceGroupPageProps, ...props }} />
);
