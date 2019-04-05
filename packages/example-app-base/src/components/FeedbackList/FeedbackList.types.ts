import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';

export interface IFeedbackListProps {
  title: string;

  /** Theme provided by higher-order component. */
  theme?: ITheme;

  /** Optional override styles */
  styles?: IStyleFunctionOrObject<IFeedbackListStyleProps, IFeedbackListStyles>;
}

export type IFeedbackListStyleProps = Pick<IFeedbackListProps, 'theme'>;

export interface IFeedbackListStyles {
  root: IStyle;
  pivot: IStyle;
  issueList: IStyle;
  button: IStyle;
  itemLabel: IStyle;
  itemCell: IStyle;
  itemName: IStyle;
  timeStamp: IStyle;
}
