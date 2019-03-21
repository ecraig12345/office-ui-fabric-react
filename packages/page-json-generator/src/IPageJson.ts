import { PageKind } from './PageJsonGenerator';
export interface ITokenJson {
  text: string;
  hyperlinkedPage?: string;
  pageKind?: PageKind;
}

export interface ITableRowJson {
  name: string;
  typeTokens: ITokenJson[];
  descriptionHtml: string;
  deprecated: boolean;
  deprecatedMessage?: string;
}

export interface IEnumTableRowJson {
  name: string;
  descriptionHtml: string;
  value: string;
}

export interface ITableJson {
  kind: 'interface' | 'enum' | 'class';
  name: string;
  extendsTokens: ITokenJson[];
  descriptionHtml: string;
  members: ITableRowJson[] | IEnumTableRowJson[];
}

export interface IPageJson {
  tables: ITableJson[];
}
