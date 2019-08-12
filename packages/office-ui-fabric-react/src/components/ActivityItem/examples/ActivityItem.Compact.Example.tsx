import * as React from 'react';
import { ActivityItem, mergeStyleSets, IActivityItemProps, Icon } from 'office-ui-fabric-react';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: '20px'
  },
  nameText: {
    fontWeight: 'bold'
  }
});

export const ActivityItemCompactExample: React.FunctionComponent = () => {
  const activityItemExamples: Partial<IActivityItemProps & React.ClassAttributes<{}>>[] = [
    {
      key: 1,
      activityDescription: [
        <span key={1} className={classNames.nameText}>
          Tahlia Whittle
        </span>,
        <span key={2}> edited this file</span>
      ],
      activityPersonas: [
        {
          imageUrl: TestImages.personaFemale
        }
      ],
      isCompact: true
    },
    {
      key: 2,
      activityDescription: [
        <span key={1} className={classNames.nameText}>
          Patrick Loton
        </span>,
        <span key={2}> and </span>,
        <span key={3} className={classNames.nameText}>
          {' '}
          6 others
        </span>
      ],
      activityPersonas: [
        {
          imageInitials: 'PT',
          text: 'Robert Larsson'
        },
        {
          imageUrl: TestImages.personaMale
        },
        {
          imageInitials: 'EC',
          text: 'Eduarda Costa'
        }
      ],
      isCompact: true
    },
    {
      key: 3,
      activityDescription: [
        <span key={1} className={classNames.nameText}>
          Sabrina De Luca
        </span>,
        <span key={2}> added this file</span>
      ],
      activityIcon: <Icon iconName={'Add'} />,
      isCompact: true
    },
    {
      key: 4,
      activityDescription: [
        <span key={1} className={classNames.nameText}>
          Chuan Rojumanong
        </span>,
        <span key={2}> shared this file</span>
      ],
      activityIcon: <Icon iconName={'Share'} />,
      isCompact: true
    }
  ];

  const activityExampleList: Array<JSX.Element> = [];
  activityItemExamples.forEach((item: { key: string | number }) => {
    const props = item;
    activityExampleList.push(<ActivityItem {...props as IActivityItemProps} key={item.key} className={classNames.exampleRoot} />);
  });

  return <div>{activityExampleList}</div>;
};
