import { writeFileSync } from 'fs';

export function generateTsxFile(pageName: string): void {
  // write Page.tsx for fabric-website-resources
  const pageContent = `import * as React from 'react';

  import { PropertiesTableSet } from '@uifabric/example-app-base';

  export const ${pageName}Page = (props: { isHeaderVisible: boolean }) => (
    <PropertiesTableSet jsonDocs={require('../../../../../../common/pages/styling/${pageName}.page.json')} />
  );`;

  console.log(`Writing ${pageName}Page.tsx`);

  writeFileSync(`../../apps/fabric-website-resources/src/components/pages/References/${pageName}Page.tsx`, pageContent);

  // write ComponentPage.tsx for fabric-website
  const componentPageContent = `import * as React from 'react';
  import { ${pageName}Page } from '@uifabric/fabric-website-resources/lib/components/pages/References/${pageName}Page';
  import { PageHeader } from '../../components/PageHeader/PageHeader';
  import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
  const pageStyles: any = require('../PageStyles.module.scss');

  export class ${pageName}ComponentPage extends React.Component<any, any> {
    public render(): JSX.Element {
      return (
        <div className={pageStyles.basePage}>
          <ComponentPage>
            <PageHeader pageTitle="${pageName}" backgroundColor="#038387" />
            <${pageName}Page isHeaderVisible={false} />
          </ComponentPage>
        </div>
      );
    }
  }`;

  console.log(`Writing ${pageName}ComponentPage.tsx`);

  writeFileSync(`../../apps/fabric-website/src/pages/References/${pageName}ComponentPage.tsx`, componentPageContent);
}
