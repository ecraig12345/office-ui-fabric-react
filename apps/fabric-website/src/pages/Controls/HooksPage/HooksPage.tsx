import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { HooksPageProps } from './HooksPage.doc';

export const HooksPage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...HooksPageProps[props.platform]} />;
};
