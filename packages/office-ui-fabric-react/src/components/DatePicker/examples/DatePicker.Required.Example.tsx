import * as React from 'react';
import { DatePicker, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
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
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  isRequiredErrorMessage: 'Field is required.',
  invalidInputErrorMessage: 'Invalid date format.'
};

export const DatePickerRequiredExample: React.FunctionComponent = () => {
  return (
    <div>
      <p>Validation will happen when the DatePicker loses focus.</p>
      <DatePicker
        label="Date required (with label)"
        isRequired={true}
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        className={controlClass}
      />
      <DatePicker
        isRequired={true}
        strings={DayPickerStrings}
        placeholder="Date required with no label..."
        ariaLabel="Select a date"
        className={controlClass}
      />
    </div>
  );
};
