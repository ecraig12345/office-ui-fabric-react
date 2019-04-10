import * as React from 'react';
import { ComponentPage, ExampleCard, PropertiesTableSet, PageMarkdown, FeedbackList } from '@uifabric/example-app-base';
import { styled, classNamesFunction } from '@uifabric/utilities';
import { IDemoPageProps, IDemoPageStyles, IDemoPageStyleProps } from './DemoPage.types';
import { ComponentStatus } from '../ComponentStatus/ComponentStatus';

const getClassNames = classNamesFunction<IDemoPageStyleProps, IDemoPageStyles>();

const DemoPageBase: React.StatelessComponent<IDemoPageProps> = demoPageProps => {
  const {
    implementationExamples,
    exampleKnobs,
    examples,
    propertiesTablesSources,
    overview,
    bestPractices,
    dos,
    donts,
    componentStatus,
    styles,
    // Passing the extra props to ComponentPage like this helps to keep the prop names in sync
    ...componentPageProps
  } = demoPageProps;
  const { subComponentStyles } = getClassNames(styles);
  return (
    <ComponentPage
      {...componentPageProps}
      styles={subComponentStyles.componentPage}
      implementationExampleCards={
        implementationExamples && (
          <div>
            {implementationExamples.map(example => (
              <ExampleCard title={example.title} code={example.code} key={example.title} styles={subComponentStyles.exampleCards}>
                {example.view}
              </ExampleCard>
            ))}
          </div>
        )
      }
      exampleCards={
        (exampleKnobs || examples) && (
          <div>
            {exampleKnobs}
            {examples &&
              examples.map(example => {
                const { view, ...cardProps } = example;
                return (
                  <ExampleCard key={cardProps.title} {...cardProps} styles={subComponentStyles.exampleCards}>
                    {view}
                  </ExampleCard>
                );
              })}
          </div>
        )
      }
      propertiesTables={propertiesTablesSources && <PropertiesTableSet sources={propertiesTablesSources} />}
      overview={overview ? <PageMarkdown>{overview}</PageMarkdown> : undefined}
      bestPractices={bestPractices ? <PageMarkdown>{bestPractices}</PageMarkdown> : undefined}
      dos={dos ? <PageMarkdown>{dos}</PageMarkdown> : undefined}
      donts={donts ? <PageMarkdown>{donts}</PageMarkdown> : undefined}
      componentStatus={componentStatus ? <ComponentStatus {...componentStatus} /> : undefined}
      feedback={componentPageProps.isFeedbackVisible ? <FeedbackList title={componentPageProps.title} /> : undefined}
    />
  );
};

// No override styles needed
const getStyles = () => ({});

export const DemoPage: React.StatelessComponent<IDemoPageProps> = styled<IDemoPageProps, IDemoPageStyleProps, IDemoPageStyles>(
  DemoPageBase,
  getStyles,
  undefined,
  { scope: 'DemoPage' }
);
