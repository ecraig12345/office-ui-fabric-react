import * as React from 'react';
import { DatePicker, IDatePickerStrings } from '@uifabric/date-time';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const controlClass = mergeStyles({
  marginBottom: 15,
  maxWidth: 300
});

const DayPickerStrings: IDatePickerStrings = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  goToToday: 'Go to today',
  weekNumberFormatString: 'Week number {0}',
  prevMonthAriaLabel: 'Previous month',
  nextMonthAriaLabel: 'Next month',
  prevYearAriaLabel: 'Previous year',
  nextYearAriaLabel: 'Next year',
  prevYearRangeAriaLabel: 'Previous year range',
  nextYearRangeAriaLabel: 'Next year range',
  closeButtonAriaLabel: 'Close'
};

export const DatePickerDisabledExample: React.FunctionComponent = () => {
  return (
    <div>
      <DatePicker
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        disabled={true}
        className={controlClass}
      />

      <DatePicker
        label="Disabled (with label)"
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        disabled={true}
        className={controlClass}
      />
    </div>
  );
};
