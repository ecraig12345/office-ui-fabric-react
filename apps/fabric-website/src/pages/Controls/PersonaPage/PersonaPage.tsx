import * as React from 'react';
import { IPageSectionProps, Markdown } from '@uifabric/example-app-base/lib/index2';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { PersonaPageProps } from './PersonaPage.doc';
import { Platforms } from '../../../interfaces/Platforms';
import { oufrRepoUrl } from '../../../utilities/index';

const baseUrl = oufrRepoUrl + '/src/pages/Controls/PersonaPage/';

export const PersonaPage: React.StatelessComponent<IControlsPageProps> = props => {
  const { platform } = props;
  return <ControlsAreaPage {...props} title="Persona" {...PersonaPageProps[platform]} otherSections={_otherSections(platform)} />;
};

function _otherSections(platform: Platforms): IPageSectionProps<Platforms>[] {
  switch (platform) {
    case 'ios':
      return [
        {
          sectionName: 'Implementation',
          editUrl: baseUrl + 'docs/ios/PersonaImplementation.md',
          content: (
            <Markdown>
              {require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/ios/PersonaImplementation.md') as string}
            </Markdown>
          )
        }
      ];

    case 'android':
      return [
        {
          sectionName: 'Implementation',
          editUrl: baseUrl + 'docs/android/PersonaImplementation.md',
          content: (
            <Markdown>
              {
                require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/PersonaPage/docs/android/PersonaImplementation.md') as string
              }
            </Markdown>
          )
        }
      ];
  }
}
