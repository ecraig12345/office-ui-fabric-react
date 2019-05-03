import * as React from 'react';
import { IPageSectionProps, Markdown } from '@uifabric/example-app-base/lib/index2';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { ProgressIndicatorPageProps } from './ProgressIndicatorPage.doc';
import { Platforms } from '../../../interfaces/Platforms';
import { websiteRepoUrl } from '../../../utilities/index';

export const ProgressIndicatorPage: React.StatelessComponent<IControlsPageProps> = props => {
  const { platform } = props;

  return (
    <ControlsAreaPage
      {...props}
      title="Progress Indicator"
      {...ProgressIndicatorPageProps[platform]}
      otherSections={_otherSections(platform)}
    />
  );
};

function _otherSections(platform: Platforms): IPageSectionProps<Platforms>[] {
  switch (platform) {
    case 'ios':
      return [
        {
          sectionName: 'Implementation',
          editUrl: websiteRepoUrl + '/src/pages/Controls/ProgressIndicatorPage/docs/ios/ProgressIndicatorImplementation.md',
          content: (
            <Markdown>
              {
                require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/ProgressIndicatorPage/docs/ios/ProgressIndicatorImplementation.md') as string
              }
            </Markdown>
          )
        }
      ];
  }
}
