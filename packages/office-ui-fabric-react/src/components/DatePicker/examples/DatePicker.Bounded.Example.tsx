import * as React from 'react';
import { DatePicker, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { addMonths, addYears } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const controlClass = mergeStyles({
  marginBottom: 15,
  maxWidth: 300
});

const today: Date = new Date(Date.now());
const minDate: Date = addMonths(today, -1);
const maxDate: Date = addYears(today, 1);
const dateRange = `${minDate.toLocaleDateString()}-${maxDate.toLocaleDateString()}`;

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
  invalidInputErrorMessage: 'Invalid date format.',
  isOutOfBoundsErrorMessage: `Date must be between ${dateRange}`
};

export const DatePickerBoundedExample: React.FunctionComponent = () => {
  return (
    <div>
      <p>
        When date boundaries are set (via minDate and maxDate props) the DatePicker will not allow out-of-bounds dates to be picked or
        entered. In this example, the allowed dates are {dateRange}.
      </p>
      <DatePicker
        isRequired={false}
        strings={DayPickerStrings}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        minDate={minDate}
        maxDate={maxDate}
        allowTextInput={true}
        className={controlClass}
      />
    </div>
  );
};
