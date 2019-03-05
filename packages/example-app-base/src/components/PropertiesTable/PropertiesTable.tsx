import * as React from 'react';
import { assign, IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import {
  DetailsList,
  DetailsRow,
  IDetailsRowProps,
  IDetailsRowStyles,
  IDetailsHeaderProps,
  DetailsListLayoutMode,
  IColumn,
  IGroup
} from 'office-ui-fabric-react/lib/DetailsList';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { SelectionMode } from 'office-ui-fabric-react/lib/Selection';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import './PropertiesTable.scss';
import { IInterfaceProperty, IEnumProperty, InterfacePropertyType, ILinkToken } from '../../utilities/parser/index';
import { FontClassNames, ITheme } from 'office-ui-fabric-react/lib/Styling';

export interface IPropertiesTableProps {
  title?: string;
  properties: IInterfaceProperty[] | IEnumProperty[];
  renderAsEnum?: boolean;
  key?: string;
  name?: string;
  description?: string;
  extendsTokens?: ILinkToken[];
}

export interface IPropertiesTableState {
  properties: IInterfaceProperty[] | IEnumProperty[];
  isEnum: boolean;
}

export const XSMALL_GAP_SIZE = 2.5;
export const SMALL_GAP_SIZE = 7.5;
export const MEDIUM_GAP_SIZE = 15;
export const LARGE_GAP_SIZE = 50;

const renderCell = (text: string) => {
  // When the text is passed to this function, it has had newline characters removed,
  // so this regex will match backtick sequences that span multiple lines.
  const regex = new RegExp('`[^`]*`', 'g');
  let regexResult: RegExpExecArray | null;
  let codeBlocks: { index: number; text: string }[] = [];
  while ((regexResult = regex.exec(text)) !== null) {
    codeBlocks.push({
      index: regexResult.index,
      text: regexResult[0]
    });
  }

  if (codeBlocks.length === 0) {
    return (
      <Text variant="small">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Text>
    );
  }

  const eltChildren: JSX.Element[] = [];

  let codeIndex = 0;
  let textIndex = 0;
  while (textIndex < text.length && codeIndex < codeBlocks.length) {
    const codeBlock = codeBlocks[codeIndex];
    if (textIndex < codeBlock.index) {
      const str = text.substring(textIndex, codeBlock.index);
      eltChildren.push(<span key={textIndex} dangerouslySetInnerHTML={{ __html: str }} />);
      textIndex += str.length;
    } else {
      eltChildren.push(<code key={textIndex}>{codeBlock.text.substring(1, codeBlock.text.length - 1)}</code>);
      codeIndex++;
      textIndex += codeBlock.text.length;
    }
  }
  if (textIndex < text.length) {
    eltChildren.push(<span key={textIndex} dangerouslySetInnerHTML={{ __html: text.substring(textIndex, text.length) }} />);
  }

  return <Text variant="small">{eltChildren}</Text>;
};

const renderCellType = (typeTokens: ILinkToken[]) => {
  return _parseILinkTokens(false, typeTokens);
};

const createRenderCell = (propertyName: keyof IInterfaceProperty | keyof IEnumProperty) => (item: IInterfaceProperty | IEnumProperty) =>
  renderCell(item[propertyName]);

const createRenderCellType = (propertyName: keyof IInterfaceProperty | keyof IEnumProperty) => (item: IInterfaceProperty | IEnumProperty) =>
  renderCellType(item[propertyName]);

const DEFAULT_COLUMNS: IColumn[] = [
  {
    key: 'name',
    name: 'Name',
    fieldName: 'name',
    minWidth: 150,
    maxWidth: 250,
    isCollapsible: false,
    isRowHeader: true,
    isResizable: true,
    onRender: createRenderCell('name')
  },
  {
    key: 'type',
    name: 'Type',
    fieldName: 'type',
    minWidth: 130,
    maxWidth: 150,
    isCollapsible: false,
    isResizable: true,
    isMultiline: true,
    onRender: createRenderCellType('typeTokens')
  },
  {
    key: 'description',
    name: 'Description',
    fieldName: 'description',
    minWidth: 300,
    maxWidth: 400,
    isCollapsible: false,
    isResizable: true,
    isMultiline: true,
    onRender: createRenderCell('description')
  }
];

const ENUM_COLUMNS: IColumn[] = [
  {
    key: 'name',
    name: 'Name',
    fieldName: 'name',
    minWidth: 150,
    maxWidth: 250,
    isCollapsible: false,
    isRowHeader: true,
    isResizable: true,
    onRender: createRenderCell('name')
  },
  {
    key: 'value',
    name: 'Value',
    fieldName: 'value',
    minWidth: 100,
    maxWidth: 200,
    isCollapsible: false,
    isResizable: true,
    onRender: createRenderCell('value')
  },
  {
    key: 'description',
    name: 'Description',
    fieldName: 'description',
    minWidth: 300,
    maxWidth: 400,
    isCollapsible: false,
    isResizable: true,
    onRender: createRenderCell('description')
  }
];

function _parseILinkTokens(extend: boolean, linkTokens?: ILinkToken[]): JSX.Element | undefined {
  if (linkTokens && linkTokens.length > 0) {
    if (extend) {
      return (
        <Text variant={'small'} className="PropertiesTable-extends">
          {'Extends '}
          {linkTokens.map((token: ILinkToken, index: number) => {
            if (token.hyperlinkedPage) {
              const href = '#/components/' + token.hyperlinkedPage.toLowerCase() + '#' + token.text;
              return (
                <Link href={href} key={token.text + index}>
                  {token.text}
                </Link>
              );
            } else if (token.text) {
              return token.text;
            } else {
              return undefined;
            }
          })}
        </Text>
      );
    } else {
      return (
        <Text variant={'small'} className="PropertiesTable-extends">
          {linkTokens.map((token: ILinkToken, index: number) => {
            if (token.hyperlinkedPage) {
              const href = '#/components/' + token.hyperlinkedPage.toLowerCase() + '#' + token.text;
              return (
                <Link href={href} key={token.text + index}>
                  {token.text}
                </Link>
              );
            } else if (token.text) {
              return token.text;
            } else {
              return undefined;
            }
          })}
        </Text>
      );
    }
  }

  return undefined;
}

export class PropertiesTable extends React.Component<IPropertiesTableProps, IPropertiesTableState> {
  public static defaultProps: Partial<IPropertiesTableProps> = {
    title: 'Properties'
  };

  constructor(props: IPropertiesTableProps) {
    super(props);

    if (props.renderAsEnum) {
      let properties = (props.properties as IEnumProperty[])
        .sort((a: IEnumProperty, b: IEnumProperty) => (a.value < b.value ? -1 : a.value > b.value ? 1 : 0))
        .map((prop: IEnumProperty, index: number) => assign({}, prop, { key: index }));

      this.state = {
        properties,
        isEnum: !!props.renderAsEnum
      };
    } else {
      let properties = (props.properties as IInterfaceProperty[])
        .sort((a: IInterfaceProperty, b: IInterfaceProperty) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
        .map((prop: IInterfaceProperty, index: number) => assign({}, prop, { key: index }));

      this.state = {
        properties,
        isEnum: !!props.renderAsEnum
      };
    }
  }

  public render(): JSX.Element | null {
    const { title, description, extendsTokens } = this.props;
    const { properties, isEnum } = this.state;

    return (
      <Stack gap={MEDIUM_GAP_SIZE}>
        {description && description !== '' && (extendsTokens && extendsTokens.length > 0) ? (
          <Stack gap={SMALL_GAP_SIZE}>
            {this._renderTitle()}
            {(description && description !== '') || (extendsTokens && extendsTokens.length > 0) ? (
              <Stack gap={XSMALL_GAP_SIZE}>
                {this._renderDescription()}
                {this._renderExtends()}
              </Stack>
            ) : (
              undefined
            )}
          </Stack>
        ) : (
          this._renderTitle()
        )}
        <DetailsList
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.justified}
          items={properties}
          columns={isEnum ? ENUM_COLUMNS : DEFAULT_COLUMNS}
          onRenderRow={this._onRenderRow}
        />
      </Stack>
    );
  }

  private _renderExtends(): JSX.Element | undefined {
    const { extendsTokens } = this.props;

    return _parseILinkTokens(true, extendsTokens);
  }

  private _renderDescription(): JSX.Element | undefined {
    const { description } = this.props;

    return description && description !== '' ? (
      <Text variant={'medium'}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Text>
    ) : (
      undefined
    );
  }

  private _renderTitle(): JSX.Element | undefined {
    const { title, name } = this.props;

    return title ? (
      <Text variant={'xLarge'}>
        <div dangerouslySetInnerHTML={{ __html: title }} id={name} />
      </Text>
    ) : (
      undefined
    );
  }

  private _onRenderRow(props: IDetailsRowProps, defaultRender?: IRenderFunction<IDetailsRowProps>): JSX.Element {
    const { item } = props;
    const rowStyles: Partial<IDetailsRowStyles> = {
      root: {
        selectors: {
          ':hover': {
            background: 'transparent'
          }
        }
      },
      isMultiline: {
        wordBreak: 'break-word'
      }
    };

    if (item.deprecated === true) {
      const deprecatedStyles: Partial<IDetailsRowStyles> = {
        root: {
          background: '#FFFFCC'
        }
      };

      return (
        <div className="DetailsRow-deprecated">
          Warning. This API is now obsolete.
          {defaultRender!({
            ...props,
            styles: rowStyles && deprecatedStyles
          })}
        </div>
      );
    }

    return <DetailsRow {...props} styles={rowStyles} />;
  }
}
