import * as React from 'react';
import { ButtonPageProps } from 'office-ui-fabric-react/lib/components/Button/Button.doc';
import { DemoPage } from '../DemoPage';
import { IDemoPageBasicProps } from '../DemoPage.types';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import * as exampleStyles from 'office-ui-fabric-react/lib/common/_exampleStyles.scss';

export interface IButtonDemoPageState {
  areButtonsDisabled: boolean;
  areButtonsChecked: boolean;
}

export class ButtonPage extends React.Component<IDemoPageBasicProps, IButtonDemoPageState> {
  constructor(props: IDemoPageBasicProps) {
    super(props);
    this.state = {
      areButtonsDisabled: false,
      areButtonsChecked: false
    };
  }

  public render() {
    const { areButtonsDisabled, areButtonsChecked } = this.state;

    return (
      <DemoPage
        {...{
          ...ButtonPageProps({ areButtonsDisabled, areButtonsChecked }),
          ...this.props,
          exampleKnobs: this._renderKnobs()
        }}
      />
    );
  }

  private _onDisabledChanged = (ev: React.MouseEvent<HTMLElement>, disabled: boolean): void => {
    this.setState({
      areButtonsDisabled: disabled
    });
  };

  private _onToggledChanged = (ev: React.MouseEvent<HTMLElement>, toggled: boolean): void => {
    this.setState({
      areButtonsChecked: toggled
    });
  };

  private _renderKnobs() {
    const { areButtonsDisabled, areButtonsChecked } = this.state;
    return (
      <>
        <Checkbox
          className={exampleStyles.exampleCheckbox}
          label="Disable buttons"
          checked={areButtonsDisabled}
          onChange={this._onDisabledChanged}
        />
        <Checkbox
          className={exampleStyles.exampleCheckbox}
          label="Mark as checked"
          checked={areButtonsChecked}
          onChange={this._onToggledChanged}
        />
      </>
    );
  }
}
