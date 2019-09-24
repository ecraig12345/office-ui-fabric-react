import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

const options: IChoiceGroupOption[] = [
  { key: 'day', iconProps: { iconName: 'CalendarDay' }, text: 'Day' },
  { key: 'week', iconProps: { iconName: 'CalendarWeek' }, text: 'Week' },
  { key: 'month', iconProps: { iconName: 'Calendar' }, text: 'Month', disabled: true }
];

export const ChoiceGroupIconExample: React.FunctionComponent = () => {
  return <ChoiceGroup label="Pick one icon" defaultSelectedKey="day" options={options} />;
};
