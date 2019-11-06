import { ApiDeclaredItem, ExcerptToken, IExcerptTokenRange } from '@microsoft/api-extractor-model';
import { ICollectedData } from './types-private';
import { ITableRowJson } from './types';
import { renderDocNodeWithoutInlineTag, getBlockTagByName, renderNodes, getTokenHyperlinks } from './rendering';

/**
 * Generate an ITableRowJson for a class/interface/enum member with the name, description,
 * deprecated message, default value, and (optionally) type tokens pre-filled.
 * @param typeTokens - Optional list of tokens which includes the item type info.
 * @param typeTokenRange - Specific location of the item type within `typeTokens`.
 */
export function getTableRowJson(
  collectedData: ICollectedData,
  apiItem: ApiDeclaredItem & { name?: string },
  typeTokens?: readonly ExcerptToken[],
  typeTokenRange?: Readonly<IExcerptTokenRange>
): ITableRowJson {
  const { tsdocComment } = apiItem;
  const tableRowJson: ITableRowJson = {
    name: apiItem.name || '',
    typeTokens: [],
    description: (tsdocComment && renderDocNodeWithoutInlineTag(tsdocComment.summarySection)) || undefined
  };

  if (tsdocComment) {
    const defaultValue =
      getBlockTagByName('@defaultValue', tsdocComment) ||
      getBlockTagByName('@defaultvalue', tsdocComment) ||
      getBlockTagByName('@default', tsdocComment);
    if (defaultValue) {
      tableRowJson.defaultValue = renderNodes(collectedData.apiModel, apiItem, defaultValue);
    }

    if (tsdocComment.deprecatedBlock) {
      tableRowJson.deprecated = true;
      tableRowJson.deprecatedMessage = renderNodes(collectedData.apiModel, apiItem, tsdocComment.deprecatedBlock.content);
    }
  }

  if (typeTokens && typeTokenRange) {
    tableRowJson.typeTokens = getTokenHyperlinks(collectedData, typeTokens, typeTokenRange);
  }

  return tableRowJson;
}
