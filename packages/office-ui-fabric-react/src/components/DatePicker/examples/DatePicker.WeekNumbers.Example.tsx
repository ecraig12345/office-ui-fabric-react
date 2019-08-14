import * as React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
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
  closeButtonAriaLabel: 'Close date picker'
};

export const DatePickerWeekNumbersExample: React.FunctionComponent = () => {
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState<DayOfWeek>(DayOfWeek.Monday);

  const onDropdownChange = (event: React.FormEvent<HTMLDivElement>, option: IDropdownOption): void => {
    setFirstDayOfWeek(DayOfWeek[option.key as keyof typeof DayOfWeek]);
  };

  return (
    <div>
      <DatePicker
        firstDayOfWeek={firstDayOfWeek}
        strings={DayPickerStrings}
        showWeekNumbers={true}
        firstWeekOfYear={1}
        showMonthPickerAsOverlay={true}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        className={controlClass}
      />
      <Dropdown
        label="Select the first day of the week"
        options={[
          { text: 'Sunday', key: DayOfWeek.Sunday },
          { text: 'Monday', key: DayOfWeek.Monday },
          { text: 'Tuesday', key: DayOfWeek.Tuesday },
          { text: 'Wednesday', key: DayOfWeek.Wednesday },
          { text: 'Thursday', key: DayOfWeek.Thursday },
          { text: 'Friday', key: DayOfWeek.Friday },
          { text: 'Saturday', key: DayOfWeek.Saturday }
        ]}
        selectedKey={firstDayOfWeek}
        onChange={onDropdownChange}
        className={controlClass}
      />
    </div>
  );
};
