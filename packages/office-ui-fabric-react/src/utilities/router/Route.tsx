import * as React from 'react';

export interface IRouteProps<TComponentProps = any> {
  path?: string;
  component?: React.ComponentType<TComponentProps>;
  getComponent?: ((cb: any) => void) & { component?: React.ComponentType<TComponentProps> };
  componentProps?: TComponentProps;
}

export class Route extends React.Component<IRouteProps, any> {}
