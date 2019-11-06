import {
  ApiClass,
  ApiEnum,
  ApiEnumMember,
  ApiInterface,
  ApiItemKind,
  ApiMethod,
  ApiMethodSignature,
  ApiProperty,
  ApiPropertySignature,
  ApiTypeAlias,
  ApiDeclaredItem,
  ApiConstructor,
  HeritageType,
  ApiItem
} from '@microsoft/api-extractor-model';
import { ITableJson, ITableRowJson, IEnumTableRowJson } from './types';
import { renderDocNodeWithoutInlineTag, getTokenHyperlinks, renderNodes, renderTokens } from './rendering';
import { ICollectedData } from './types-private';
import { getTableRowJson } from './tableRowJson';

export function createTableJson(collectedData: ICollectedData, apiItem: ApiItem): ITableJson | undefined {
  switch (apiItem.kind) {
    case ApiItemKind.Interface: {
      return createInterfacePageJson(collectedData, apiItem as ApiInterface);
    }
    case ApiItemKind.Enum: {
      return createEnumPageJson(collectedData, apiItem as ApiEnum);
    }
    case ApiItemKind.Class: {
      return createClassPageJson(collectedData, apiItem as ApiClass);
    }
    case ApiItemKind.TypeAlias: {
      return createTypeAliasPageJson(collectedData, apiItem as ApiTypeAlias);
    }
  }
  return undefined;
}

/**
 * Generate an ITableJson for any top-level API item (interface, class, enum, type alias)
 * with the name, description, deprecated message, and optionally extends tokens pre-filled.
 */
function getBasicTableJson(
  collectedData: ICollectedData,
  apiItem: ApiDeclaredItem,
  kind: ITableJson['kind'],
  extendsTypes?: HeritageType | readonly HeritageType[]
): ITableJson {
  const { tsdocComment } = apiItem;
  const tableJson: ITableJson = {
    kind,
    name: apiItem.displayName,
    description: (tsdocComment && renderDocNodeWithoutInlineTag(tsdocComment.summarySection)) || undefined
  };

  const extendsArr = !extendsTypes || Array.isArray(extendsTypes) ? extendsTypes : [extendsTypes];
  if (extendsArr && extendsArr.length) {
    tableJson.extendsTokens = [];
    for (const extendsType of extendsArr) {
      if (tableJson.extendsTokens.length) {
        // if there are multiple extends types, we should separate them with a comma
        tableJson.extendsTokens.push({ text: ', ' });
      }
      tableJson.extendsTokens.push(...getTokenHyperlinks(collectedData, extendsType.excerpt.tokens, extendsType.excerpt.tokenRange));
    }
  }

  if (tsdocComment && tsdocComment.deprecatedBlock) {
    tableJson.deprecated = true;
    tableJson.deprecatedMessage = renderNodes(collectedData.apiModel, apiItem, tsdocComment.deprecatedBlock.content);
  }

  return tableJson;
}

/**
 * Creates the interface page json object
 *
 * @param collectedData - Collected data to use for linking
 * @param interfaceItem - Interface item to search
 */
function createInterfacePageJson(collectedData: ICollectedData, interfaceItem: ApiInterface): ITableJson {
  const tableJson: ITableJson = getBasicTableJson(collectedData, interfaceItem, 'interface', interfaceItem.extendsTypes);
  if (!interfaceItem.members.length) {
    return tableJson;
  }

  const interfaceTableRowJson: ITableRowJson[] = (tableJson.members = []);

  for (const member of interfaceItem.members) {
    switch (member.kind) {
      case ApiItemKind.PropertySignature: {
        const apiPropertySignature: ApiPropertySignature = member as ApiPropertySignature;
        const tableRowJson: ITableRowJson = getTableRowJson(
          collectedData,
          apiPropertySignature,
          apiPropertySignature.excerptTokens,
          apiPropertySignature.propertyTypeExcerpt.tokenRange
        );

        interfaceTableRowJson.push(tableRowJson);
        break;
      }

      case ApiItemKind.MethodSignature: {
        const apiMethodSignature: ApiMethodSignature = member as ApiMethodSignature;
        const tableRowJson: ITableRowJson = getTableRowJson(
          collectedData,
          apiMethodSignature,
          apiMethodSignature.excerptTokens,
          apiMethodSignature.excerpt.tokenRange
        );

        interfaceTableRowJson.push(tableRowJson);
        break;
      }

      case ApiItemKind.Function: {
        break;
      }
      case ApiItemKind.Class: {
        break;
      }
    }
  }

  return tableJson;
}

/**
 * Creates an enum table json object
 */
function createEnumPageJson(collectedData: ICollectedData, enumItem: ApiEnum): ITableJson {
  const tableJson: ITableJson = getBasicTableJson(collectedData, enumItem, 'enum');
  const enumTableRowJson: IEnumTableRowJson[] = (tableJson.members = []);

  for (const member of enumItem.members) {
    switch (member.kind) {
      case ApiItemKind.EnumMember: {
        const apiEnumMember: ApiEnumMember = member as ApiEnumMember;

        const { name, description, deprecated, deprecatedMessage } = getTableRowJson(collectedData, apiEnumMember);
        const tableRowJson: IEnumTableRowJson = {
          name,
          description,
          deprecated,
          deprecatedMessage,
          value: renderTokens(apiEnumMember.excerptTokens, apiEnumMember.excerpt.tokenRange)
        };

        enumTableRowJson.push(tableRowJson);
        break;
      }
    }
  }

  return tableJson;
}

/**
 * Creates a class table json object
 *
 * @param collectedData - Collected data to use for linking
 * @param classItem - Class item to search
 */
function createClassPageJson(collectedData: ICollectedData, classItem: ApiClass): ITableJson {
  const tableJson: ITableJson = getBasicTableJson(collectedData, classItem, 'class', classItem.extendsType);

  if (!classItem.members.length) {
    return tableJson;
  }

  const classTableRowJson: ITableRowJson[] = (tableJson.members = []);

  for (const member of classItem.members) {
    switch (member.kind) {
      case ApiItemKind.Property: {
        const apiProperty: ApiProperty = member as ApiProperty;
        const tableRowJson: ITableRowJson = getTableRowJson(
          collectedData,
          apiProperty,
          apiProperty.excerptTokens,
          apiProperty.propertyTypeExcerpt.tokenRange
        );

        tableRowJson.kind = 'property';

        classTableRowJson.push(tableRowJson);
        break;
      }

      case ApiItemKind.Constructor:
      case ApiItemKind.Method: {
        const apiMethod = member as (ApiMethod | ApiConstructor);
        const tableRowJson: ITableRowJson = getTableRowJson(
          collectedData,
          apiMethod,
          apiMethod.excerptTokens,
          apiMethod.excerpt.tokenRange
        );

        tableRowJson.kind = 'method';

        if (member.kind === ApiItemKind.Constructor) {
          // The constructor is similar to a method, but we have to manually add the name.
          tableRowJson.name = 'constructor';
          classTableRowJson.unshift(tableRowJson);
        } else {
          classTableRowJson.push(tableRowJson);
        }
        break;
      }
    }
  }

  return tableJson;
}

/**
 * Creates a type alias json object
 * @param collectedData - Collected data to use for linking
 * @param typeAliasItem - Type alias item to search
 */
function createTypeAliasPageJson(collectedData: ICollectedData, typeAliasItem: ApiTypeAlias): ITableJson {
  const tableJson: ITableJson = getBasicTableJson(collectedData, typeAliasItem, 'typeAlias');

  tableJson.extendsTokens = getTokenHyperlinks(collectedData, typeAliasItem.excerptTokens, typeAliasItem.excerpt.tokenRange, true);

  return tableJson;
}
