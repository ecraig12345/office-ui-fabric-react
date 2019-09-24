import * as React from 'react';
import { ActivityItem, IActivityItemProps, Link, mergeStyleSets } from 'office-ui-fabric-react';
import { TestImages } from '@uifabric/example-data';

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: '20px'
  },
  nameText: {
    fontWeight: 'bold'
  }
});

type IActivityItemWithKey = IActivityItemProps & React.Attributes;
const activityItemExamples: IActivityItemWithKey[] = [
  {
    key: 1,
    activityDescription: [
      <Link key={1} className={classNames.nameText} onClick={_onNameClick}>
        Jack Howden
      </Link>,
      <span key={2}> renamed </span>,
      <span key={3} className={classNames.nameText}>
        DocumentTitle.docx
      </span>
    ],
    activityPersonas: [{ imageUrl: TestImages.personaMale }],
    comments: 'Hello, this is the text of my basic comment!',
    timeStamp: '23m ago'
  },
  {
    key: 2,
    activityDescription: [
      <Link key={1} className={classNames.nameText} onClick={_onNameClick}>
        Javiera Márquez
      </Link>,
      <span key={2}> and </span>,
      <Link key={3} className={classNames.nameText} onClick={_onNameClick}>
        Amelia Povalіy
      </Link>,
      <span key={4}> edited </span>,
      <Link key={5} className={classNames.nameText} onClick={_onDocumentClick}>
        SpreadsheetTitle.xlsx
      </Link>
    ],
    activityPersonas: [{ imageInitials: 'JM', text: 'Javiera Márquez' }, { imageUrl: TestImages.personaFemale }],
    timeStamp: '9:27 am'
  },
  {
    key: 3,
    activityDescription: [
      <Link key={1} className={classNames.nameText} onClick={_onNameClick}>
        Robert Larsson
      </Link>,
      <span key={2}> and </span>,
      <Link key={3} className={classNames.nameText} onClick={_onNameClick}>
        2 others
      </Link>,
      <span key={4}> commented </span>
    ],
    activityPersonas: [
      { imageInitials: 'RL', text: 'Robert Larsson' },
      { imageUrl: TestImages.personaMale },
      { imageUrl: TestImages.personaFemale }
    ],
    timeStamp: '3 days ago'
  },
  {
    key: 4,
    activityDescription: [
      <Link key={1} className={classNames.nameText} onClick={_onNameClick}>
        Jin Cheng
      </Link>,
      <span key={2}> and </span>,
      <Link key={3} className={classNames.nameText} onClick={_onNameClick}>
        5 others
      </Link>,
      <span key={4}> edited this file</span>
    ],
    activityPersonas: [
      { imageInitials: 'JC', text: 'Jin Cheng' },
      { imageUrl: TestImages.personaMale },
      { imageInitials: 'AL', text: 'Annie Lindqvist' },
      { imageUrl: TestImages.personaFemale },
      { imageUrl: TestImages.personaMale },
      { imageUrl: TestImages.personaMale }
    ],
    timeStamp: 'August 3, 2017'
  }
];

export const ActivityItemPersonaExample: React.FunctionComponent = () => {
  return (
    <div>
      {activityItemExamples.map((item: IActivityItemWithKey) => (
        <ActivityItem {...item} key={item.key} className={classNames.exampleRoot} />
      ))}
    </div>
  );
};

function _onNameClick(ev: React.MouseEvent<HTMLElement>): void {
  alert('A name was clicked: ' + (ev.target as HTMLElement).innerText);
}
function _onDocumentClick(ev: React.MouseEvent<HTMLElement>): void {
  alert('A document was clicked: ' + (ev.target as HTMLElement).innerText);
}
