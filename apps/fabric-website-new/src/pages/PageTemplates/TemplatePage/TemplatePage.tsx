import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import { Markdown, withPlatform, Page, IPageProps, IPageSectionProps } from '@uifabric/example-app-base/lib/index2';
import { getSubTitle } from '../../../utilities/index';
import { TemplatePageProps } from './TemplatePage.doc';

// Import your sass module styles. (This is actually importing a .ts file that isn't made until a build is run)
import * as styles from './TemplatePage.module.scss';
import { Platforms } from '../../../interfaces/Platforms';

// If you'll have multiple custom sections, define the base url on the remote host
const baseUrl =
  'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/apps/fabric-website-new/src/pages/PageTemplates/TemplatePage/';

// You can add additional page props by extending `IPageProps`.
export interface ITemplatePageProps extends IPageProps<Platforms> {}

// This template uses a function component rather than a class component, because the huge majority
// of pages don't need state or lifecycles.
// For an example which uses a class component (and state), see ProductsPage.

// Define the base component.
const TemplatePageBase: React.StatelessComponent<ITemplatePageProps> = props => {
  const { platform } = props;
  return (
    // The Page component is a flexible wrapper for content sections and a siderail.
    <Page
      // Pass all the props to the Page component.
      {...props}
      // Use the platform specific props from the doc.ts file.
      {...TemplatePageProps[platform]}
      // Use the getSubTitle helper function to get the page header subtitle from the active platform.
      subTitle={getSubTitle(platform)}
      // You can define custom sections using the `otherSections` prop. Here it is using a method that takes the platform as an argument to return the correct array of section props.
      otherSections={_otherSections(platform)}

      // You can hide the side rail by setting `showSideRail` to false.
      // showSideRail={false}

      // You can pass a custom className to the page wrapper if needed.
      // className="customPageClassName"
    />
  );
};

// Method that returns array of sections. Renders in the order defined.
function _otherSections(platform: Platforms): IPageSectionProps[] {
  // Use a switch statement to define the sections for each platform.
  switch (platform) {
    case 'web':
      return [];

    case 'ios':
      return [];

    case 'android':
      return [];

    default:
      return [
        // Custom section with content from markdown file.
        {
          // Optionally define the name of the section.
          sectionName: 'Custom markdown section',

          // If the content of the section is markdown, define the editUrl to enable the edit button as the file's hosted location.
          editUrl: baseUrl + 'docs/default/TemplateCustom.md',

          // Define the content of the page using the `Markdown` component.
          content: (
            <Markdown>
              {
                // Use raw-loader to point the markdown file you want to use for the section.
                require('!raw-loader!@uifabric/fabric-website-new/src/pages/PageTemplates/TemplatePage/docs/default/TemplateCustom.md') as string
              }
            </Markdown>
          )
        },

        // Custom section with JSX content.
        {
          // Optionally define the name of the section.
          sectionName: 'Custom JSX section',

          // Since there won't be a markdown file to edit online, don't define the editUrl.
          // editUrl: '',

          // Define the content using any React node you want.
          content: (
            <div>
              <p>
                This can be any React node you want. This section is also using a custom <code>className</code>.
              </p>
            </div>
          ),

          // Optionally wrap the section with a className. Use the `css` utility from Fabric to concatenate classNames that may be falsey.
          className: css(styles.customSection, 'customGlobalClassName', platform === 'web' && 'falseyGlobalClassName')
        }
      ];
  }
}

// Use the `withPlatform` higher-order component to ensure the platform prop is passed to the page from App correctly using react context.
export const TemplatePage: React.StatelessComponent<IPageProps<Platforms>> = withPlatform<Platforms>(TemplatePageBase);
