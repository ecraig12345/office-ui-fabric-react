import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import { camelize, pascalize } from '@uifabric/example-app-base/lib/utilities/index';
import { IPageSectionProps } from '../Page.types';
import * as styles from './OtherPageSection.module.scss';
import { EditSection } from '@uifabric/example-app-base';

export interface IOtherPageSectionProps extends IPageSectionProps {
  sectionName?: string;
}

export const OtherPageSection: React.StatelessComponent<IOtherPageSectionProps> = props => {
  const { className, content, editUrl, sectionName, readableSectionName = sectionName, style, title = 'Page' } = props;

  if (content) {
    const sectionClassName = sectionName ? camelize(sectionName) : '';
    const sectionId = sectionName ? pascalize(sectionName) : '';

    const editSection = editUrl && (
      <EditSection
        className={styles.edit}
        title={title}
        section={sectionId}
        sectionContent={content}
        readableSection={readableSectionName}
        url={editUrl}
      />
    );

    return (
      <div className={css(`Page-${sectionClassName}Section`, className)} style={style}>
        {readableSectionName ? (
          <div className={css(styles.sectionHeader, `Page-${sectionClassName}SectionHeader`)}>
            <h2 className={css(styles.subHeading, `Page-subHeading`)} id={sectionId}>
              {readableSectionName}
            </h2>
            {editSection}
          </div>
        ) : (
          <div className={styles.editSection}>{editSection}</div>
        )}
        <div className={css(editUrl && styles.contentWithoutHeader, styles.content)}>{content}</div>
      </div>
    );
  }
};
