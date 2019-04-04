import * as React from 'react';
import { IProperty, PropertyType, IInterfaceProperty, IEnumProperty, IMethod } from '../../utilities/parser/index';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { PropertiesTable, MEDIUM_GAP_SIZE, LARGE_GAP_SIZE } from './PropertiesTable';
import { IPropertiesTableSetProps, IEnumTableRowJson, ITableRowJson } from './PropertiesTableSet.types';

export interface IPropertiesTableSetState {
  properties: Array<IProperty>;
  showSeeMore: boolean;
}

const propertiesTableTopMargin = mergeStyles({
  marginTop: '40px'
});

export class PropertiesTableSet extends React.Component<IPropertiesTableSetProps, IPropertiesTableSetState> {
  constructor(props: IPropertiesTableSetProps) {
    super(props);

    this._onClickSeeMore = this._onClickSeeMore.bind(this);

    this.state = {
      properties: this._generatePropertyArray(),
      showSeeMore: false
    };
  }

  public renderFirst(): JSX.Element | undefined {
    if (this.state.properties.length >= 1) {
      const item = this.state.properties[0];
      return (
        <PropertiesTable
          key={item.propertyName}
          name={item.propertyName}
          title={item.title}
          description={item.description}
          extendsTokens={item.extendsTokens}
          properties={item.property}
          methods={item.methods}
          renderAsEnum={item.propertyType === PropertyType.enum}
          renderAsClass={item.propertyType === PropertyType.class}
        />
      );
    }
    return undefined;
  }

  public renderEach(): JSX.Element | undefined {
    if (this.state.properties.length > 1) {
      return (
        <Stack gap={MEDIUM_GAP_SIZE}>
          <ActionButton
            iconProps={{ iconName: this.state.showSeeMore ? 'SkypeCircleMinus' : 'CirclePlus' }}
            onClick={this._onClickSeeMore}
            onRenderText={this._onRenderText}
            styles={{ root: { paddingLeft: '0px' }, textContainer: { paddingLeft: '4px' } }}
          >
            See More
          </ActionButton>
          {this.state.showSeeMore && (
            <Stack gap={LARGE_GAP_SIZE}>
              {this.state.properties.map((item: IProperty, index: number) =>
                index !== 0 ? (
                  <PropertiesTable
                    key={item.propertyName}
                    name={item.propertyName}
                    title={item.title}
                    description={item.description}
                    extendsTokens={item.extendsTokens}
                    properties={item.property}
                    methods={item.methods}
                    renderAsEnum={item.propertyType === PropertyType.enum}
                    renderAsClass={item.propertyType === PropertyType.class}
                  />
                ) : (
                  undefined
                )
              )}
            </Stack>
          )}
        </Stack>
      );
    }
    return undefined;
  }

  public render(): JSX.Element {
    return (
      <Stack gap={LARGE_GAP_SIZE} className={propertiesTableTopMargin}>
        {this.renderFirst()}
        {this.renderEach()}
      </Stack>
    );
  }

  private _onRenderText(): JSX.Element {
    return <Text variant="xLarge">See more</Text>;
  }

  private _onClickSeeMore(): void {
    this.setState({
      showSeeMore: !this.state.showSeeMore
    });
  }

  private _generatePropertyArray(): Array<IProperty> {
    let results: Array<IProperty> = [];
    const iComponentProps: Array<IProperty> = [];
    const preResults: Array<IProperty> = [];
    const pattern: RegExp = /(I.*?Props)/;

    const { jsonDocs } = this.props;

    if (jsonDocs) {
      for (let j = 0; j < jsonDocs.tables.length; j++) {
        switch (jsonDocs.tables[j].kind) {
          case 'enum': {
            const enumMembers: IEnumProperty[] = [];

            const members: IEnumTableRowJson[] = jsonDocs.tables[j].members as IEnumTableRowJson[];
            for (let k = 0; k < members.length; k++) {
              // each member within the enum
              enumMembers.push({
                description: members[k].descriptionHtml,
                name: members[k].name,
                value: members[k].value
              });
            }

            // the enum
            preResults.push({
              propertyName: jsonDocs.tables[j].name,
              description: jsonDocs.tables[j].descriptionHtml,
              title: jsonDocs.tables[j].kind ? jsonDocs.tables[j].name + ' ' + jsonDocs.tables[j].kind : jsonDocs.tables[j].name,
              propertyType: PropertyType.enum,
              property: enumMembers
            });

            break;
          }
          case 'interface': {
            const interfaceMembers: IInterfaceProperty[] = [];

            const members: ITableRowJson[] = jsonDocs.tables[j].members as ITableRowJson[];
            for (let k = 0; k < members.length; k++) {
              // each member within the interface or class
              interfaceMembers.push({
                description: members[k].descriptionHtml,
                name: members[k].name,
                typeTokens: members[k].typeTokens,
                deprecated: members[k].deprecated,
                defaultValue: members[k].defaultValue || ''
              });
            }

            // the interface
            if (pattern.test(jsonDocs.tables[j].name)) {
              iComponentProps.push({
                propertyName: jsonDocs.tables[j].name,
                description: jsonDocs.tables[j].descriptionHtml,
                extendsTokens: jsonDocs.tables[j].extendsTokens,
                title: jsonDocs.tables[j].kind ? jsonDocs.tables[j].name + ' ' + jsonDocs.tables[j].kind : jsonDocs.tables[j].name,
                propertyType: PropertyType.interface,
                property: interfaceMembers
              });
            } else {
              preResults.push({
                propertyName: jsonDocs.tables[j].name,
                description: jsonDocs.tables[j].descriptionHtml,
                extendsTokens: jsonDocs.tables[j].extendsTokens,
                title: jsonDocs.tables[j].kind ? jsonDocs.tables[j].name + ' ' + jsonDocs.tables[j].kind : jsonDocs.tables[j].name,
                propertyType: PropertyType.interface,
                property: interfaceMembers
              });
            }

            break;
          }
          case 'class': {
            // class members are a mix of IInterfaceProperty and IMethod
            const classMembers: IInterfaceProperty[] = [];
            const classMethods: IMethod[] = [];

            const members: ITableRowJson[] = jsonDocs.tables[j].members as ITableRowJson[];
            for (let k = 0; k < members.length; k++) {
              console.log('member kind: ' + members[k].kind);
              if (members[k].kind === 'Method') {
                classMethods.push({
                  description: members[k].descriptionHtml,
                  name: members[k].name,
                  typeTokens: members[k].typeTokens
                });
              } else {
                classMembers.push({
                  description: members[k].descriptionHtml,
                  name: members[k].name,
                  typeTokens: members[k].typeTokens,
                  deprecated: members[k].deprecated,
                  defaultValue: members[k].defaultValue || ''
                });
              }
            }

            // the class
            preResults.push({
              propertyName: jsonDocs.tables[j].name,
              description: jsonDocs.tables[j].descriptionHtml,
              extendsTokens: jsonDocs.tables[j].extendsTokens,
              title: jsonDocs.tables[j].kind ? jsonDocs.tables[j].name + ' ' + jsonDocs.tables[j].kind : jsonDocs.tables[j].name,
              propertyType: PropertyType.class,
              property: classMembers,
              methods: classMethods
            });
            break;
          }
        }
      }
    }

    results = iComponentProps;
    for (const result of preResults) {
      results.push(result);
    }

    return results;
  }
}
