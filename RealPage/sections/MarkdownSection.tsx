import * as React from 'react';
import { EditSection } from '@uifabric/example-app-base';
import { css } from 'office-ui-fabric-react';
import { camelize, getEditUrl, pascalize } from '@uifabric/example-app-base/lib/utilities/index';
import { Markdown } from '@uifabric/example-app-base/lib/components/Markdown';
import { IPageSectionProps } from '../Page.types';
import * as styles from './MarkdownSection.module.scss';

export const MarkdownSection: React.StatelessComponent<IPageSectionProps> = props => {
  const {
    className,
    content: markdown,
    fileNamePrefix,
    componentUrl,
    sectionName,
    readableSectionName = sectionName,
    style,
    title = 'Page'
  } = props;
  const sectionClassName = sectionName ? camelize(sectionName) : 'markdown';
  const sectionId = sectionName ? pascalize(sectionName) : 'Markdown';

  if (markdown) {
    const editSection = componentUrl && (
      <EditSection
        className={styles.edit}
        title={title}
        section={sectionId}
        readableSection={readableSectionName || 'Markdown'}
        sectionContent={<Markdown>{markdown}</Markdown>}
        url={getEditUrl({ name: fileNamePrefix || title, section: sectionId, baseUrl: componentUrl })!}
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
          componentUrl && <div className={styles.editSection}>{editSection}</div>
        )}
        <div className={css(styles.content, `Page-${sectionClassName}SectionContent`)}>
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    );
  }

  return null;
};
