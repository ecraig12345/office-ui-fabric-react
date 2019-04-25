import * as React from 'react';
import { FeedbackList } from '@uifabric/example-app-base';
import { css } from 'office-ui-fabric-react';
import { camelize, pascalize } from '@uifabric/example-app-base/lib/utilities/index';
import { IPageSectionProps } from '../Page.types';
import * as styles from './FeedbackSection.module.scss';

export const FeedbackSection: React.StatelessComponent<IPageSectionProps> = props => {
  const { className, content: feedback, sectionName = 'Feedback', readableSectionName = sectionName, style, title } = props;
  if (feedback) {
    const sectionClassName = camelize(sectionName);
    const sectionId = pascalize(sectionName);
    const feedbackList = feedback || (title && <FeedbackList title={title} />);

    if (feedbackList) {
      return (
        <div className={css(styles.feedbackSection, `Page-${sectionClassName}Section`, className)} style={style}>
          <div className={css(styles.sectionHeader, `Page-${sectionClassName}SectionHeader`)}>
            <h2 className={css(styles.subHeading, `Page-subHeading`)} id={sectionId}>
              {readableSectionName}
            </h2>
          </div>
          <div className={css(styles.feedbackList, `Page-${sectionClassName}SectionContent`)}>{feedbackList}</div>
        </div>
      );
    }
  }
};
