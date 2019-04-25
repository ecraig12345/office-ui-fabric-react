import * as React from 'react';
import { EditSection } from '@uifabric/example-app-base';
import { css } from 'office-ui-fabric-react';
import { camelize, getEditUrl, pascalize } from '@uifabric/example-app-base/lib/utilities/index';
import { Markdown } from '@uifabric/example-app-base/lib/components/Markdown';
import { IPageSectionProps } from '../Page.types';
import * as styles from './OverviewSection.module.scss';

export const OverviewSection: React.StatelessComponent<IPageSectionProps> = props => {
  const {
    className,
    content: overview,
    fileNamePrefix,
    componentUrl,
    sectionName = 'Overview',
    readableSectionName = sectionName,
    style,
    title = 'Page'
  } = props;
  const sectionClassName = camelize(sectionName);
  const sectionId = pascalize(sectionName);

  if (overview) {
    return (
      <div className={css(`Page-${sectionClassName}Section`, className)} style={style}>
        <div className={css(styles.sectionHeader, `Page-${sectionClassName}SectionHeader`)}>
          <h2 className={css(styles.subHeading, `Page-subHeading`)} id={sectionId}>
            {readableSectionName}
          </h2>
          {componentUrl && (
            <EditSection
              className={styles.edit}
              title={title}
              section={sectionId}
              readableSection={readableSectionName}
              sectionContent={<Markdown>{overview}</Markdown>}
              url={getEditUrl({ name: fileNamePrefix || title, section: sectionId, baseUrl: componentUrl })!}
            />
          )}
        </div>
        <div className={css(styles.content, `Page-${sectionClassName}SectionContent`)}>
          <Markdown>{overview}</Markdown>
        </div>
      </div>
    );
  }

  return null;
};
