import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
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
  closeButtonAriaLabel: 'Close',
  isRequiredErrorMessage: 'Start date is required.',
  invalidInputErrorMessage: 'Invalid date format.'
};

export const DatePickerInputExample: React.FunctionComponent = () => {
  // tslint:disable:jsx-no-lambda
  const [value, setValue] = React.useState<Date | null | undefined>();

  return (
    <div>
      <p>
        Text input is allowed by default when using keyboard navigation. Clicking the TextField will pop up the DatePicker. Clicking the
        TextField again will dismiss the DatePicker and allow text input.
      </p>
      <DatePicker
        label="Start date"
        isRequired={false}
        allowTextInput={true}
        ariaLabel="This field is required. One of the support input formats is year dash month dash day."
        strings={DayPickerStrings}
        value={value!}
        onSelectDate={setValue}
        className={controlClass}
      />
      <DefaultButton onClick={() => setValue(null)} text="Clear" />
    </div>
  );
};
