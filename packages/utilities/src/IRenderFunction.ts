/**
 * Render function interface for providing overrideable render callbacks.
 *
 * @public
 * {@docCategory IRenderFunction}
 */
export interface IRenderFunction<P> {
  (props?: P, defaultRender?: (props?: P) => JSX.Element | null): JSX.Element | null;
}
