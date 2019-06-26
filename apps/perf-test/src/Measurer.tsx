import * as React from 'react';
import { Stack, Text, Stylesheet } from 'office-ui-fabric-react';

export interface ITimings {
  count: number;
  initialTime: number;
  latestTime: number;
  totalTime: number;
  individualTime: number;
}

const _createTimings = (): ITimings => ({
  count: 0,
  initialTime: 0,
  latestTime: 0,
  totalTime: 0,
  individualTime: 0
});

const _round = (num: number, decimals: number): number => Number.parseFloat(num.toFixed(decimals));

const stylesheet = Stylesheet.getInstance();

export class Measurer extends React.Component<{}, {}> {
  private static _timings = _createTimings();

  /** Gets timings data and resets for the next run */
  public static getTimings(): ITimings {
    const timings = Measurer._timings;

    Measurer._timings = _createTimings();
    // Reset mergeStyles for true perf measurements
    stylesheet.reset();

    timings.totalTime = _round(timings.latestTime - timings.initialTime, 3);
    timings.individualTime = _round(timings.totalTime / timings.count, 3);

    return timings;
  }

  public componentWillMount() {
    Measurer._timings.count++;
    if (Measurer._timings.initialTime === 0) {
      Measurer._timings.initialTime = performance.now();
    }
  }

  public render(): JSX.Element {
    return <>{this.props.children}</>;
  }

  public componentDidMount(): void {
    Measurer._timings.latestTime = performance.now();
  }
}

export const MeasurerTimings: React.FunctionComponent = () => {
  const timings = Measurer.getTimings();

  return (
    <Stack gap={20}>
      <Text className="total">
        <b>Total time:</b> {timings.totalTime}ms
      </Text>
      <Text className="peritem">
        <b>Per Item:</b> {timings.individualTime}ms
      </Text>
    </Stack>
  );
};
