import * as React from 'react';
import { ActivityItem, IActivityItemProps, Icon, Link, mergeStyleSets } from 'office-ui-fabric-react';

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
        Philippe Lampros
      </Link>,
      <span key={2}> commented</span>
    ],
    activityIcon: <Icon iconName={'Message'} />,
    comments: [
      <span key={1}>Hello! I am making a comment and mentioning </span>,
      <Link key={2} className={classNames.nameText} onClick={_onNameClick}>
        @Anđela Debeljak
      </Link>,
      <span key={3}> in the text of the comment.</span>
    ],
    timeStamp: 'Just now'
  },
  {
    key: 2,
    activityDescription: [
      <Link key={1} className={classNames.nameText} onClick={_onNameClick}>
        Lisha Refai
      </Link>,
      <span key={2}> deleted </span>,
      <span key={3} className={classNames.nameText}>
        DocumentTitle.docx
      </span>
    ],
    activityIcon: <Icon iconName="Trash" />,
    timeStamp: '2 hours ago'
  },
  {
    key: 3,
    activityDescription: [
      <Link key={1} className={classNames.nameText} onClick={_onNameClick}>
        Julian Arvidsson
      </Link>,
      <span key={2}> moved </span>,
      <Link key={3} className={classNames.nameText} onClick={_onDocumentClick}>
        PresentationTitle.pptx
      </Link>,
      <span key={4}> to </span>,
      <Link key={5} className={classNames.nameText} onClick={_onDocumentClick}>
        Destination Folder
      </Link>
    ],
    activityIcon: <Icon iconName="FabricMovetoFolder" />,
    timeStamp: 'Yesterday'
  }
];

export const ActivityItemBasicExample: React.FunctionComponent = () => {
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
  alert('A document or folder was clicked: ' + (ev.target as HTMLElement).innerText);
}
