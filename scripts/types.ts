export interface IPackageJson {
  name: string;
  version: string;
  main: string;
  types?: string;
  module?: string;
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
  [key: string]: any;
}
