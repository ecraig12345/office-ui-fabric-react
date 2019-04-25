import * as React from 'react';
import { css, classNamesFunction, styled, Async } from 'office-ui-fabric-react/lib/Utilities';
import { IProcessedStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';
import { EditSection, PropertiesTableSet, FeedbackList, ExampleCard, pascalize } from '@uifabric/example-app-base';
import { IPageProps, IPageStyleProps, IPageStyles, IPageSectionProps, IRenderedExample } from './Page.types';
import { Markdown } from '@uifabric/example-app-base/lib/components/Markdown';
import { getStyles } from './Page.styles';
import { PageHeader2 } from '../PageHeader2';

const getClassNames = classNamesFunction<IPageStyleProps, IPageStyles>();

const headingWithEditStackProps: IStackProps = {
  horizontal: true,
  verticalAlign: 'center',
  horizontalAlign: 'space-between'
};

export interface IPageState {
  isMounted?: boolean;
  isMountedOffset?: boolean;
}

export class PageBase extends React.Component<IPageProps, IPageState> {
  public static defaultProps: Partial<IPageProps> = {
    showSideRail: true
  };

  private _async = new Async();
  private _styles: IProcessedStyleSet<IPageStyles>;

  public componentDidMount(): void {
    this._async.setTimeout(() => {
      this.setState({ isMounted: true }, () => {
        this._async.setTimeout(() => {
          this.setState({ isMountedOffset: true });
        }, 10);
      });
    }, 10);
  }

  public componentWillUnmount(): void {
    this._async.dispose();
  }

  public render() {
    const { componentName, className, otherSections, styles, theme } = this.props;

    const classNames = (this._styles = getClassNames(styles, { theme, isMountedOffset: this.state.isMountedOffset }));

    return (
      <div className={css(classNames.root, className)}>
        <div className={componentName}>
          {this._getPageHeader()}
          <div className={classNames.main}>
            <article className={classNames.sectionWrapper}>
              {this._getOverview()}
              {this._getBestPractices()}
              {this._getExamples()}
              {this._getPropertiesTable()}
              {this._getFeedback()}
              {otherSections && otherSections.map(section => this._getSection(section))}
            </article>
            {this._getSideRail()}
          </div>
        </div>
      </div>
    );
  }

  private _getPageHeader(): JSX.Element | undefined {
    const props = this.props;
    return (
      <PageHeader2
        pageTitle={props.title}
        pageSubTitle={props.subTitle}
        // TODO: remove once component is styled
        theme={props.theme}
      />
    );
  }

  private _getSideRail(): JSX.Element | undefined {
    // TODO
    return <nav />;
  }

  private _getNativePropsInfo(): JSX.Element | undefined {
    const { allowNativeProps, allowNativePropsForComponentName, nativePropsElement = 'div' } = this.props;
    if (allowNativeProps) {
      const nativePropsElems = Array.isArray(nativePropsElement) ? nativePropsElement : [nativePropsElement];

      const elementsArr: (JSX.Element | string)[] = [];
      for (const elem of nativePropsElems) {
        elementsArr.push(<code key={elem}>{`<${elem}>`}</code>);
        elementsArr.push(' and ');
      }
      elementsArr.pop(); // remove last ' and '
      elementsArr.push(` tag${nativePropsElems.length > 1 ? 's' : ''}`);

      let componentNameJsx: JSX.Element | undefined;
      if (allowNativePropsForComponentName) {
        componentNameJsx = <code>{allowNativePropsForComponentName}</code>;
      }

      return (
        <MessageBar>
          <strong>Native props allowed {componentNameJsx && <>for {componentNameJsx}</>}</strong> - all HTML attributes native to the{' '}
          {elementsArr}, including all aria and custom data attributes, can be applied as native props on{' '}
          {componentNameJsx || 'this component'}.
        </MessageBar>
      );
    }
  }

  private _getPropertiesTable(): JSX.Element | undefined {
    const { propertiesTablesSources } = this.props;
    if (propertiesTablesSources) {
      return this._getSection({
        sectionName: 'Implementation',
        content: (
          <>
            {this._getNativePropsInfo()}
            <PropertiesTableSet sources={propertiesTablesSources} />
          </>
        )
      });
    }
  }

  private _getBestPractices(): JSX.Element | undefined {
    const classNames = this._styles;
    const props = this.props;
    const { bestPractices, dos, donts, title } = props;
    if (!(bestPractices || (dos && donts))) {
      return;
    }

    const practicesUrl = this._getURL('BestPractices');
    const dosUrl = this._getURL('Dos');
    const dontsUrl = this._getURL('Donts');

    return (
      <div id="BestPractices" className={classNames.section}>
        {bestPractices &&
          this._getSection({
            sectionName: 'Best Practices',
            content: bestPractices,
            editUrl: practicesUrl,
            className: classNames.subSection,
            id: null
          })}
        {!!(dos && donts) && (
          <div className={classNames.subSection}>
            <div className={classNames.dosDontsSection}>
              <Stack className={classNames.sectionHeader} {...headingWithEditStackProps}>
                <h3 className={classNames.smallSubHeading}>Do</h3>
                {dosUrl && <EditSection className={classNames.edit} title={title} section="Dos" url={dosUrl} />}
              </Stack>
              <Markdown className={css(classNames.markdownContent, classNames.dosList)}>{dos}</Markdown>
            </div>
            <div className={classNames.dosDontsSection}>
              <Stack className={classNames.sectionHeader} {...headingWithEditStackProps}>
                <h3 className={classNames.smallSubHeading}>Don&rsquo;t</h3>
                {dontsUrl && <EditSection className={classNames.edit} title={title} section="Don'ts" url={dontsUrl} />}
              </Stack>
              <Markdown className={css(classNames.markdownContent, classNames.dontsList)}>{donts}</Markdown>
            </div>
          </div>
        )}
      </div>
    );
  }

  private _getExamples(): JSX.Element | undefined {
    const { exampleKnobs, examples } = this.props;
    const classNames = this._styles;
    if (examples) {
      const content = (
        <>
          {exampleKnobs && (
            <div className={classNames.subSection} key="knobs">
              {exampleKnobs}
            </div>
          )}
          {examples.map((example: IRenderedExample) => {
            const { view, ...exampleProps } = example;
            return (
              <div key={example.title + '-key'} className={classNames.subSection}>
                <ExampleCard {...exampleProps}>{view}</ExampleCard>
              </div>
            );
          })}
        </>
      );
      return this._getSection({ content, sectionName: 'Usage' });
    }
  }

  private _getFeedback(): JSX.Element | undefined {
    if (this.props.isFeedbackVisible) {
      return this._getSection({
        sectionName: 'Feedback',
        content: <FeedbackList title={this.props.title} />
      });
    }
  }

  private _getOverview(): JSX.Element | undefined {
    const { overview } = this.props;
    if (overview) {
      return this._getSection({
        sectionName: 'Overview',
        content: overview,
        editUrl: this._getURL('Overview')
      });
    }

    return undefined;
  }

  private _getSection(section: IPageSectionProps): JSX.Element {
    // TODO handle readableSectionName?
    // TODO don't override section class entirely
    const { sectionName, content, className, id = pascalize(sectionName), editUrl } = section;
    const classNames = this._styles;
    return (
      <div key={id || sectionName} className={css(classNames.section, className)}>
        <Stack className={classNames.sectionHeader} {...headingWithEditStackProps}>
          <h2 className={css(classNames.subHeading)} id={!!id ? id : undefined}>
            {sectionName}
          </h2>
          {editUrl && <EditSection title={this.props.title} section={sectionName} url={editUrl} />}
        </Stack>
        {content}
      </div>
    );
  }

  private _getURL(section: string): string | undefined {
    const componentName = pascalize(this.props.title || this.props.componentName!);
    // Generate edit URL from componentURL
    let mdUrl;
    if (this.props.componentUrl) {
      mdUrl = `${this.props.componentUrl}/docs/${componentName}${section}.md`;
      // Replace /tree/ or /blob/ with /edit/ to get straight to GitHub editor.
      if (mdUrl.indexOf('/tree/') !== -1) {
        mdUrl = mdUrl.replace('/tree/', '/edit/');
      } else if (mdUrl.indexOf('/blob/') !== -1) {
        mdUrl = mdUrl.replace('/blob/', '/edit/');
      }
    }
    return mdUrl;
  }
}

export const ComponentPage2: React.StatelessComponent<IPageProps> = styled<IPageProps, IPageStyleProps, IPageStyles>(
  PageBase,
  getStyles,
  undefined,
  {
    scope: 'ComponentPage2'
  }
);
