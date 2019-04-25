import * as React from "react";
import { EditSection } from "@uifabric/example-app-base";
import { css } from "office-ui-fabric-react";
import {
  camelize,
  getEditUrl,
  pascalize
} from "@uifabric/example-app-base/lib/utilities";
import { Markdown } from "@uifabric/example-app-base/lib/components/Markdown";
import { IPageSectionProps } from "../Page.types";
import * as styles from "./BestPracticesSection.module.scss";

export interface IBestPracticesSectionProps extends IPageSectionProps {
  bestPractices?: string;
  dos?: string;
  donts?: string;
}

export const BestPracticesSection: React.StatelessComponent<
  IBestPracticesSectionProps
> = props => {
  const {
    className,
    fileNamePrefix,
    componentUrl,
    sectionName = "Best Practices",
    readableSectionName = sectionName,
    bestPractices,
    dos,
    donts,
    style,
    title = "Page"
  } = props;
  const sectionClassName = camelize(sectionName);
  const sectionId = pascalize(sectionName);

  const dosAndDonts: JSX.Element[] = [];

  dosAndDonts.push(
    <div className={css(styles.subSection, `Page-usage`)} key="best-practices">
      <div className={css(styles.sectionHeader, `Page-usageHeader`)}>
        <h2
          className={css(styles.subHeading, `Page-subHeading`)}
          id={sectionId}
        >
          {readableSectionName}
        </h2>
        {bestPractices && componentUrl && (
          <EditSection
            className={styles.edit}
            title={title}
            section={sectionId}
            readableSection={readableSectionName}
            sectionContent={<Markdown>{bestPractices}</Markdown>}
            url={
              getEditUrl({
                name: fileNamePrefix || title,
                section: sectionId,
                baseUrl: componentUrl
              })!
            }
          />
        )}
      </div>
      {bestPractices !== undefined && (
        <div
          className={css(
            styles.content,
            `Page-${sectionClassName}SectionContent`
          )}
        >
          <Markdown>{bestPractices}</Markdown>
        </div>
      )}
    </div>
  );

  if (dos || donts) {
    dosAndDonts.push(
      <div
        className={css(styles.subSection, `Page-doDontSections`)}
        key="dosAndDonts"
      >
        <div className={css(styles.doSection, `Page-doSection`)}>
          <div className={css(styles.sectionHeader, `Page-doSectionHeader`)}>
            <h3 className={css(styles.smallSubHeading)}>Do</h3>
            {dos && componentUrl && (
              <EditSection
                className={styles.edit}
                title={title}
                section={"Dos"}
                sectionContent={<Markdown>{dos}</Markdown>}
                url={
                  getEditUrl({
                    name: fileNamePrefix || title,
                    section: "Dos",
                    baseUrl: componentUrl
                  })!
                }
              />
            )}
          </div>
          {dos !== undefined && (
            <div
              className={css(
                styles.content,
                `Page-${sectionClassName}SectionContent`,
                styles.doList
              )}
            >
              <Markdown>{dos}</Markdown>
            </div>
          )}
        </div>
        <div
          className={css(
            styles.doSection,
            `Page-doSection Page-doSection--dont`
          )}
        >
          <div className={css(styles.sectionHeader, `Page-doSectionHeader`)}>
            <h3 className={css(styles.smallSubHeading)}>Don&rsquo;t</h3>
            {donts && componentUrl && (
              <EditSection
                className={styles.edit}
                title={title}
                section={"Donts"}
                sectionContent={<Markdown>{donts}</Markdown>}
                url={
                  getEditUrl({
                    name: fileNamePrefix || title,
                    section: "Donts",
                    baseUrl: componentUrl
                  })!
                }
              />
            )}
          </div>
          {donts !== undefined && (
            <div
              className={css(
                styles.content,
                `Page-${sectionClassName}SectionContent`,
                styles.dontList
              )}
            >
              <Markdown>{donts}</Markdown>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (bestPractices || (dos && donts)) {
    return (
      <div
        className={css(`Page-${sectionClassName}Section`, className)}
        style={style}
      >
        {dosAndDonts}
      </div>
    );
  }

  return null;
};
