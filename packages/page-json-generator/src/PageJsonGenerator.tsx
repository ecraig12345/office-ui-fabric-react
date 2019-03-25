import * as path from 'path';
import { DocExcerpt, DocInlineTag, DocNodeKind, DocSection, DocComment } from '@microsoft/tsdoc';
import {
  ApiClass,
  ApiEntryPoint,
  ApiEnum,
  ApiEnumMember,
  ApiInterface,
  ApiItem,
  ApiItemKind,
  ApiDocumentedItem,
  ApiMethod,
  ApiMethodSignature,
  ApiModel,
  ApiPackage,
  ApiProperty,
  ApiPropertySignature,
  ExcerptToken,
  ExcerptTokenKind
} from '@microsoft/api-extractor';
import { FileSystem, JsonFile } from '@microsoft/node-core-library';
import { IPageJson, ITableJson, ITableRowJson, IEnumTableRowJson } from './IPageJson';
import { generateTsxFile } from './TsxFileGenerator';

/**
 * Options that define the information necessary to find the api.json file
 * and create individual page json files out of it
 */
export interface IPageJsonOptions {
  apiJsonPath: string;
  pageJsonFolderPath: string;
  pageNames: string[];
  kind: PageKind;
  createTsxFiles?: boolean;
}

/**
 * The name of the page and what kind of page it is
 */
export interface IPage {
  pageName: string;
  kind: PageKind;
}

/**
 * Used to keep track of where the page will live on the site
 */
export enum PageKind {
  References = 'References',
  Components = 'Components'
}

/**
 * Api items associated with a page
 */
class PageData {
  public readonly pageName: string;
  public apiItems: ApiItem[] = [];

  public constructor(pageName: string) {
    this.pageName = pageName;
  }
}

class CollectedData {
  /**
   * Map of page name to PageData
   */
  public pageDataByPageName: Map<string, PageData> = new Map<string, PageData>();
  public apiToPage: Map<string, IPage> = new Map<string, IPage>();
}

/**
 * Function to create the api page json files
 *
 * @param options - The options for the page, including the path of the api.json file,
 * where to create the api page jsons, and the name of the pages to create.
 */
export function generateJson(option: IPageJsonOptions): void {
  const collectedData: CollectedData = new CollectedData();

  // collect page data
  // Create the folder if it doesn't already exist
  FileSystem.ensureFolder(option.pageJsonFolderPath);

  console.log('Deleting contents of ' + option.pageJsonFolderPath);
  FileSystem.ensureEmptyFolder(option.pageJsonFolderPath);

  console.log('Loading ' + option.apiJsonPath);

  const apiModel: ApiModel = new ApiModel();
  // NOTE: later you can load other packages into the model and process them together
  const apiPackage: ApiPackage = apiModel.loadPackage(option.apiJsonPath);

  console.log('Successfully loaded ' + option.apiJsonPath);

  const apiEntryPoint: ApiEntryPoint = apiPackage.entryPoints[0]; // assume there is only one entry point

  // const collectedData: CollectedData = new CollectedData();
  // Store the data for each page in a map
  for (const pageName of option.pageNames) {
    collectedData.pageDataByPageName.set(pageName, new PageData(pageName));
  }

  collectPageData(collectedData, apiEntryPoint, option.kind);

  // create files
  createPageJsonFiles(collectedData, option);

  generateTsxFiles(collectedData, option.createTsxFiles);
}

function generateTsxFiles(collectedData: CollectedData, createTsxFiles?: boolean): void {
  if (createTsxFiles) {
    collectedData.pageDataByPageName.forEach((value: PageData, pageName: string) => {
      generateTsxFile(pageName);
    });
  }
}

/**
 * Create file for each page
 * @param options Page json options
 */
function createPageJsonFiles(collectedData: CollectedData, options: IPageJsonOptions): void {
  collectedData.pageDataByPageName.forEach((value: PageData, pageName: string) => {
    const pageJsonPath: string = path.join(options.pageJsonFolderPath, pageName + '.page.json');
    console.log('Writing ' + pageJsonPath);

    const pageData: PageData = collectedData.pageDataByPageName.get(pageName)!;

    const pageJson: IPageJson = { tables: [] };
    for (const apiItem of pageData.apiItems) {
      switch (apiItem.kind) {
        case ApiItemKind.Interface: {
          pageJson.tables.push(createInterfacePageJson(collectedData, apiItem as ApiInterface));
          break;
        }
        case ApiItemKind.Enum: {
          pageJson.tables.push(createEnumPageJson(apiItem as ApiEnum));
          break;
        }
        case ApiItemKind.Class: {
          pageJson.tables.push(createClassPageJson(collectedData, apiItem as ApiClass));
          break;
        }
      }
    }

    JsonFile.save(pageJson, pageJsonPath);
  });
}

/**
 * Creates the interface page json object
 *
 * @param interfaceItem Interface item to search
 */
function createInterfacePageJson(collectedData: CollectedData, interfaceItem: ApiInterface): ITableJson {
  const interfaceTableRowJson: ITableRowJson[] = [];

  const tableJson: ITableJson = {
    kind: 'interface',
    name: interfaceItem.displayName,
    extendsTokens: [],
    descriptionHtml: '',
    members: interfaceTableRowJson
  };

  if (interfaceItem.tsdocComment) {
    tableJson.descriptionHtml += renderDocNodeWithoutInlineTag(interfaceItem.tsdocComment.summarySection);
  }

  let numOfExtendsType = 0;
  for (const extendsType of interfaceItem.extendsTypes) {
    // if there are multiple extends types, we should separate them with a comma
    if (numOfExtendsType > 0) {
      tableJson.extendsTokens.push({ text: ', ' });
    }
    // This API could be improved
    for (let i: number = extendsType.excerpt.tokenRange.startIndex; i < extendsType.excerpt.tokenRange.endIndex; ++i) {
      const token: ExcerptToken = extendsType.excerpt.tokens[i];
      if (token.kind === ExcerptTokenKind.Reference) {
        // search for reference in collectedData
        const apiPage = collectedData.apiToPage.get(token.text);
        if (apiPage) {
          tableJson.extendsTokens.push({ text: token.text, hyperlinkedPage: apiPage.pageName, pageKind: apiPage.kind });
        } else {
          tableJson.extendsTokens.push({ text: token.text });
        }
      } else {
        tableJson.extendsTokens.push({ text: token.text });
      }
    }
    numOfExtendsType++;
  }
  for (const member of interfaceItem.members) {
    switch (member.kind) {
      case ApiItemKind.PropertySignature: {
        const apiPropertySignature: ApiPropertySignature = member as ApiPropertySignature;
        const tableRowJson: ITableRowJson = {
          name: apiPropertySignature.name,
          typeTokens: [],
          descriptionHtml: '',
          deprecated: false
        };

        for (
          let i: number = apiPropertySignature.propertyTypeExcerpt.tokenRange.startIndex;
          i < apiPropertySignature.propertyTypeExcerpt.tokenRange.endIndex;
          ++i
        ) {
          const token: ExcerptToken = apiPropertySignature.excerptTokens[i];
          if (token.kind === ExcerptTokenKind.Reference) {
            // search for reference in collectedData
            const apiPage = collectedData.apiToPage.get(token.text);
            if (apiPage !== undefined) {
              tableRowJson.typeTokens.push({ text: token.text, hyperlinkedPage: apiPage.pageName, pageKind: apiPage.kind });
            } else {
              tableRowJson.typeTokens.push({ text: token.text });
            }
          } else {
            tableRowJson.typeTokens.push({ text: token.text });
          }
        }
        if (apiPropertySignature.tsdocComment) {
          if (apiPropertySignature.tsdocComment.deprecatedBlock) {
            tableRowJson.deprecated = true;
          }

          tableRowJson.descriptionHtml += renderDocNodeWithoutInlineTag(apiPropertySignature.tsdocComment.summarySection);
        }
        interfaceTableRowJson.push(tableRowJson);
        break;
      }
      case ApiItemKind.MethodSignature: {
        const apiMethodSignature: ApiMethodSignature = member as ApiMethodSignature;
        const tableRowJson: ITableRowJson = {
          name: apiMethodSignature.name,
          typeTokens: [],
          descriptionHtml: '',
          deprecated: false
        };

        for (let i: number = apiMethodSignature.excerpt.tokenRange.startIndex; i < apiMethodSignature.excerpt.tokenRange.endIndex; ++i) {
          const token: ExcerptToken = apiMethodSignature.excerptTokens[i];
          if (token.kind === ExcerptTokenKind.Reference) {
            // search for reference in collectedData
            const apiPage = collectedData.apiToPage.get(token.text);
            if (apiPage !== undefined) {
              tableRowJson.typeTokens.push({ text: token.text, hyperlinkedPage: apiPage.pageName, pageKind: apiPage.kind });
            } else {
              tableRowJson.typeTokens.push({ text: token.text });
            }
          } else {
            tableRowJson.typeTokens.push({ text: token.text });
          }
        }
        if (apiMethodSignature.tsdocComment) {
          if (apiMethodSignature.tsdocComment.deprecatedBlock) {
            tableRowJson.deprecated = true;
          }

          tableRowJson.descriptionHtml += renderDocNodeWithoutInlineTag(apiMethodSignature.tsdocComment.summarySection);
        }
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

  tableJson.members = interfaceTableRowJson;

  return tableJson;
}

/**
 * Creates an enum table json object
 *
 * @param enumItem Enum item to search
 */
function createEnumPageJson(enumItem: ApiEnum): ITableJson {
  const enumTableRowJson: IEnumTableRowJson[] = [];

  const tableJson: ITableJson = {
    kind: 'enum',
    name: enumItem.displayName,
    extendsTokens: [],
    descriptionHtml: '',
    members: enumTableRowJson
  };

  if (enumItem.tsdocComment) {
    tableJson.descriptionHtml += renderDocNodeWithoutInlineTag(enumItem.tsdocComment.summarySection);
  }

  // TODO: figure out issue with excerpt token range for enums
  // for (let i: number = enumItem.excerpt.tokenRange.startIndex; i < enumItem.excerpt.tokenRange.endIndex; ++i) {
  //   const token: ExcerptToken = enumItem.excerpt.tokens[i];
  //   tableJson.extendsTokens.push({ text: token.text });
  // }

  for (const member of enumItem.members) {
    switch (member.kind) {
      case ApiItemKind.EnumMember: {
        const apiEnumMember: ApiEnumMember = member as ApiEnumMember;
        const tableRowJson: IEnumTableRowJson = {
          name: apiEnumMember.name,
          descriptionHtml: '',
          value: '0'
        };

        for (let i: number = apiEnumMember.excerpt.tokenRange.startIndex; i < apiEnumMember.excerpt.tokenRange.endIndex; ++i) {
          const token: ExcerptToken = apiEnumMember.excerptTokens[i];
          tableRowJson.value = token.text;
        }
        if (apiEnumMember.tsdocComment) {
          tableRowJson.descriptionHtml += renderDocNodeWithoutInlineTag(apiEnumMember.tsdocComment.summarySection);
        }
        enumTableRowJson.push(tableRowJson);
        break;
      }
    }
  }

  tableJson.members = enumTableRowJson;

  return tableJson;
}

/**
 * Creates a class table json object
 *
 * @param classItem Class item to search
 */
function createClassPageJson(collectedData: CollectedData, classItem: ApiClass): ITableJson {
  const classTableRowJson: ITableRowJson[] = [];

  const tableJson: ITableJson = {
    kind: 'class',
    name: classItem.displayName,
    extendsTokens: [],
    descriptionHtml: '',
    members: classTableRowJson
  };

  if (classItem.tsdocComment) {
    tableJson.descriptionHtml += renderDocNodeWithoutInlineTag(classItem.tsdocComment.summarySection);
  }

  if (classItem.extendsType) {
    for (let i: number = classItem.extendsType.excerpt.tokenRange.startIndex; i < classItem.extendsType.excerpt.tokenRange.endIndex; ++i) {
      const token: ExcerptToken = classItem.extendsType.excerpt.tokens[i];
      tableJson.extendsTokens.push({ text: token.text });
    }
  }

  for (const member of classItem.members) {
    switch (member.kind) {
      case ApiItemKind.Property: {
        const apiProperty: ApiProperty = member as ApiProperty;
        const tableRowJson: ITableRowJson = {
          name: apiProperty.name,
          typeTokens: [],
          descriptionHtml: '',
          deprecated: false
        };

        for (
          let i: number = apiProperty.propertyTypeExcerpt.tokenRange.startIndex;
          i < apiProperty.propertyTypeExcerpt.tokenRange.endIndex;
          ++i
        ) {
          const token: ExcerptToken = apiProperty.excerptTokens[i];
          if (token.kind === ExcerptTokenKind.Reference) {
            // search for reference in collectedData
            const apiPage = collectedData.apiToPage.get(token.text);
            if (apiPage !== undefined) {
              tableRowJson.typeTokens.push({ text: token.text, hyperlinkedPage: apiPage.pageName, pageKind: apiPage.kind });
            } else {
              tableRowJson.typeTokens.push({ text: token.text });
            }
          } else {
            tableRowJson.typeTokens.push({ text: token.text });
          }
        }
        if (apiProperty.tsdocComment) {
          if (apiProperty.tsdocComment.deprecatedBlock) {
            tableRowJson.deprecated = true;
          }

          tableRowJson.descriptionHtml += renderDocNodeWithoutInlineTag(apiProperty.tsdocComment.summarySection);
        }
        classTableRowJson.push(tableRowJson);
        break;
      }
      case ApiItemKind.Method: {
        const apiMethod: ApiMethod = member as ApiMethod;
        const tableRowJson: ITableRowJson = {
          name: apiMethod.name,
          typeTokens: [],
          descriptionHtml: '',
          deprecated: false
        };

        for (let i: number = apiMethod.excerpt.tokenRange.startIndex; i < apiMethod.excerpt.tokenRange.endIndex; ++i) {
          const token: ExcerptToken = apiMethod.excerptTokens[i];
          if (token.kind === ExcerptTokenKind.Reference) {
            // search for reference in collectedData
            const apiPage = collectedData.apiToPage.get(token.text);
            if (apiPage !== undefined) {
              tableRowJson.typeTokens.push({ text: token.text, hyperlinkedPage: apiPage.pageName, pageKind: apiPage.kind });
            } else {
              tableRowJson.typeTokens.push({ text: token.text });
            }
          } else {
            tableRowJson.typeTokens.push({ text: token.text });
          }
        }
        if (apiMethod.tsdocComment) {
          if (apiMethod.tsdocComment.deprecatedBlock) {
            tableRowJson.deprecated = true;
          }

          tableRowJson.descriptionHtml += renderDocNodeWithoutInlineTag(apiMethod.tsdocComment.summarySection);
        }
        classTableRowJson.push(tableRowJson);
        break;
      }
      case ApiItemKind.Constructor: {
        break;
      }
    }
  }

  tableJson.members = classTableRowJson;

  return tableJson;
}

/**
 * Renders the doc node (likely a DocComment's DocSection) without the inline tag
 *
 * @param docNode Doc node from which to remove the inline tag
 */
function renderDocNodeWithoutInlineTag(docSection?: DocSection): string {
  let result = '';
  if (docSection) {
    if (docSection.kind === DocNodeKind.InlineTag) {
      return result;
    } else if (docSection instanceof DocExcerpt) {
      result += docSection.content.toString();
    }
    for (const childNode of docSection.getChildNodes()) {
      result += renderDocNodeWithoutInlineTag(childNode as DocSection);
    }
  }
  return result;
}

/**
 * Finds an inline tag by name from the provided doc node
 *
 * @param tagName Name of the inline tag
 * @param docNode Doc node to search
 */
function findInlineTagByName(tagName: string, docComment: DocComment): DocInlineTag | undefined {
  if (docComment instanceof DocInlineTag) {
    if (docComment.tagName === tagName) {
      return docComment;
    }
  }
  for (const childNode of docComment.getChildNodes()) {
    const result: DocInlineTag | undefined = findInlineTagByName(tagName, childNode as DocComment);
    if (result !== undefined) {
      return result;
    }
  }
  return undefined;
}

/**
 * Loads api items into the page data object.
 *
 * @param collectedData Map of strings to PageData
 * @param apiItem The apiItem to inspect
 */
function collectPageData(collectedData: CollectedData, apiItem: ApiItem, kind: PageKind): void {
  if (apiItem instanceof ApiDocumentedItem) {
    switch (apiItem.kind) {
      case ApiItemKind.Interface:
      case ApiItemKind.Enum:
      case ApiItemKind.Class: {
        console.log('Analyzing ' + apiItem.displayName);

        if (apiItem.tsdocComment !== undefined) {
          const docCategoryTag: DocInlineTag | undefined = findInlineTagByName('@docCategory', apiItem.tsdocComment);

          if (docCategoryTag !== undefined) {
            console.log('FOUND TAG: ' + JSON.stringify(docCategoryTag.tagContent));

            const pageName: string = docCategoryTag.tagContent.trim();
            let pageData: PageData | undefined = collectedData.pageDataByPageName.get(pageName);

            if (pageData === undefined) {
              console.log('Warning: Unrecognized page name: ' + pageName);
              collectedData.pageDataByPageName.set(pageName, new PageData(pageName));
              pageData = collectedData.pageDataByPageName.get(pageName);
            }

            collectedData.apiToPage.set(apiItem.displayName, { pageName, kind });

            pageData!.apiItems.push(apiItem);
          }
        }
        break;
      }
    }
  }

  for (const memberApiItem of apiItem.members) {
    collectPageData(collectedData, memberApiItem, kind);
  }
}
