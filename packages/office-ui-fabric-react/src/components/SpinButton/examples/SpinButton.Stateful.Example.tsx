import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';

const suffix = ' cm';
const suffixRegex = / cm$/;
const step = 2;

export class SpinButtonStatefulExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div style={{ width: '400px' }}>
        <SpinButton
          label="SpinButton with custom implementation:"
          defaultValue={'7' + suffix}
          step={step}
          onValidate={this._onValidate}
          onIncrement={this._onIncrement}
          onDecrement={this._onDecrement}
        />
      </div>
    );
  }

  private _onValidate = (
    value: string,
    event: React.SyntheticEvent<HTMLElement>,
    defaultOnValidate: (value: string, event: React.SyntheticEvent<HTMLElement>) => string | undefined
  ) => {
    value = value.replace(suffixRegex, '');
    return (defaultOnValidate(value, event) || '0') + suffix;
  };

  private _onIncrement = (value: string, defaultOnIncrement: (value: string) => string | undefined) => {
    value = value.replace(suffixRegex, '');
    return (defaultOnIncrement(value) || '0') + suffix;
  };

  private _onDecrement = (value: string, defaultOnDecrement: (value: string) => string | undefined) => {
    value = value.replace(suffixRegex, '');
    return (defaultOnDecrement(value) || '0') + suffix;
  };
}
