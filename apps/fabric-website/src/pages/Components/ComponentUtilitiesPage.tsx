import * as React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { pageStyles } from '../Page.styles';

export const ComponentUtilitiesPage: React.StatelessComponent = () => {
  return (
    <div className={pageStyles.basePage}>
      <PageHeader pageTitle="Utilities" backgroundColor="#038387" />
      <h2 className="ComponentPage-subHeading">Overview</h2>
      <p>
        Fabric React includes utilities that allow you to control keyboard navigation behaviors, manage object selection and interaction,
        and apply custom themes.
      </p>
    </div>
  );
};
