import { ICompleteCollectedData } from './types-private';
import { ITableJson, ITableRowJson, ILinkToken } from './types';

// Current limitation: can only process inheritance from classes and interfaces (not types)
const supportedKinds: ITableJson['kind'][] = ['class', 'interface'];

/**
 * For all the collected page.json data, add inherited members to interfaces and classes.
 */
export function addInheritedMembers(collectedData: ICompleteCollectedData): void {
  for (const pageJson of collectedData.pageJsonByName.values()) {
    for (const tableJson of pageJson.tables) {
      addInheritedMembersForTable(collectedData, tableJson);
    }
  }
}

/**
 * @param tableJson - Table we're adding members to
 * @param extendsTokens - If recursing into a parent table, different set of extends tokens to check
 * (defaults to `tableJson.extendsTokens`)
 */
function addInheritedMembersForTable(collectedData: ICompleteCollectedData, tableJson: ITableJson, parentTable?: ITableJson): void {
  const extendsTokens = parentTable ? parentTable.extendsTokens : tableJson.extendsTokens;
  const extendsNames = parentTable ? parentTable.extendsNames : tableJson.extendsNames;
  collectedData.apiModel.

  if (
    !supportedKinds.includes(parentTable ? parentTable.kind : tableJson.kind) ||
    !extendsTokens ||
    !extendsNames ||
    extendsNames.length !== extendsTokens.length
  ) {
    return;
  }

  for (let i = 0; i < extendsTokens.length; i++) {
    const tokenGroup = extendsTokens[i];
    const extendsText = extendsNames[i];

    tokenGroup.forEach((token: ILinkToken, j: number) => {

    })

    const tokensWithLinks = tokenGroup.filter((token: ILinkToken) => !!token.linkedPage);
    if (!tokensWithLinks.length) {
      continue;
    }

    for (const token of tokensWithLinks) {
      // This is a type within our set of packages. Get the relevant page and table.
      const pageData = collectedData.pageJsonByName.get(token.linkedPage!)!;
      const newParent = pageData.tables.find((t: ITableJson) => t.name === token.text);

      // The parent kind === this kind check is so classes can only inherit from classes and
      // interfaces from interfaces (no mixing them and no inheriting from types)
      if (newParent && newParent.kind === tableJson.kind && supportedKinds.includes(newParent.kind)) {
        if (newParent.members) {
          // Add the parent's members, marking where they came from
          const newMembers = (newParent.members as ITableRowJson[]).map((member: ITableRowJson) => ({
            ...member,
            inheritedFrom: { ...token }
          }));
          tableJson.members = ((tableJson.members || []) as ITableRowJson[]).concat(newMembers);
        }

        if (newParent.extendsTokens) {
          // Recurse into things the parent extends
          addInheritedMembersForTable(collectedData, tableJson, newParent);
        }
      }
    }
  }
}

function stuff() {
        // This is a type within our set of packages. Get the relevant page and table.
        const pageData = collectedData.pageJsonByName.get(token.linkedPage!)!;
        const newParent = pageData.tables.find((t: ITableJson) => t.name === token.text);

        // The parent kind === this kind check is so classes can only inherit from classes and
        // interfaces from interfaces (no mixing them and no inheriting from types)
        if (newParent && newParent.kind === tableJson.kind && supportedKinds.includes(newParent.kind)) {
          if (newParent.members) {
            // Add the parent's members, marking where they came from
            const newMembers = (newParent.members as ITableRowJson[]).map((member: ITableRowJson) => ({
              ...member,
              inheritedFrom: { ...token }
            }));
            tableJson.members = ((tableJson.members || []) as ITableRowJson[]).concat(newMembers);
          }

          if (newParent.extendsTokens) {
            // Recurse into things the parent extends
            addInheritedMembersForTable(collectedData, tableJson, newParent);
          }
        }
}

export interface IFoo extends Partial<ITableJson> {}
