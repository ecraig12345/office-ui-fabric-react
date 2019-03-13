import * as React from 'react';
import { EventGroup } from '../../Utilities';
import { IRouteProps } from './Route';

export interface IRouterProps {
  /**
   * Gets the component ref.
   */
  componentRef?: () => void;

  replaceState?: boolean;
  children?: any;
  onNewRouteLoaded?: () => void;
}

export class Router extends React.Component<IRouterProps, {}> {
  private _events: EventGroup;

  constructor(props: IRouterProps) {
    super(props);
    this._events = new EventGroup(this);
  }

  public componentDidMount(): void {
    this._events.on(window, 'hashchange', () => this.forceUpdate());
  }

  public componentWillUnmount() {
    this._events.dispose();
  }

  public render() {
    return this._resolveRoute();
  }

  private _getPath(): string {
    let path = location.hash;
    const hashIndex = path.lastIndexOf('#'),
      questionMarkIndex = path.indexOf('?');

    // Look for the start of a query in the currentPath, then strip out the query to find the correct page to render
    if (questionMarkIndex > -1) {
      path = path.substr(0, questionMarkIndex);
    }

    if (hashIndex > 0) {
      path = path.substr(0, hashIndex);
    }

    return path;
  }

  private _resolveRoute(path?: string, children?: React.ReactNode): React.ReactNode | null {
    path = path || this._getPath();
    children = children || this.props.children;

    const routes = React.Children.toArray(children);

    for (let i = 0; i < routes.length; i++) {
      const route: any = routes[i];

      if (_match(path, route)) {
        // tslint:disable-next-line:prefer-const
        let { component, getComponent, componentProps }: IRouteProps = route.props;

        if (getComponent) {
          let asynchronouslyResolved = false;

          if (getComponent.component) {
            component = getComponent.component;
          } else {
            getComponent((resolved: React.ComponentType<any>) => {
              component = getComponent!.component = resolved;

              if (asynchronouslyResolved) {
                this.forceUpdate();
              }
            });
          }
          // Note: in webpack 2, this ends up always async.
          asynchronouslyResolved = true;
        }

        if (component) {
          const componentChildren = this._resolveRoute(path, route.props.children || []);
          componentProps = {
            key: route.key,
            ...(componentProps || {})
          };
          return React.createElement(component, componentProps, componentChildren);
        } else if (getComponent) {
          // We are asynchronously fetching this component.
          return null;
        }
      }
    }

    return null;
  }
}

function _match(currentPath: string, child: any): boolean {
  if (child.props) {
    let { path } = child.props;

    path = path || '';
    currentPath = currentPath || '';

    return !path || path.toLowerCase() === currentPath.toLowerCase();
  }

  return false;
}
