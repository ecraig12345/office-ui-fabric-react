import * as React from 'react';
import { Dropdown, PrimaryButton, Stack, TextField, Text } from 'office-ui-fabric-react';
import { Measurer, MeasurerTimings, ITimings } from './Measurer';
import { Scenarios } from './Scenarios';

// tslint:disable:jsx-no-lambda

export const App = () => {
  const [itemsVisible, setItemsVisible] = React.useState(false);
  const [timingsVisible, setTimingsVisible] = React.useState(false);
  const [scenario, setScenario] = React.useState(Scenarios[0]);
  const [count, setCount] = React.useState(1000);
  const [iterations, setIterations] = React.useState(1);

  React.useEffect(() => {
<<<<<<< Updated upstream
    setTimingsVisible(itemsVisible);
=======
    if (itemsVisible) {
      if (iterationsCount < iterations) {
        if (showIteration) {
          setShowIteration(false);
          setResults(results.concat(Measurer.getTimings()));
          Measurer.reset();
        } else {
          setIterationsCount(iterationsCount + 1);
          setShowIteration(true);
        }
      } else if (!timingsVisible) {
        setResults(results.concat(Measurer.getTimings()));
        Measurer.reset();
        setTimingsVisible(true);
      }
    }
  }, [itemsVisible, iterations, iterationsCount, showIteration, results, timingsVisible]);

  const runTest = React.useCallback(() => {
    setItemsVisible(!itemsVisible);
    if (itemsVisible) {
      setShowIteration(false);
      setTimingsVisible(false);
      setIterationsCount(0);
      setResults([]);
    }
>>>>>>> Stashed changes
  }, [itemsVisible]);

  return (
    <div>
      <Stack horizontal gap={20} styles={{ root: { marginBottom: 20 } }}>
        <Stack gap={20} styles={{ root: { width: 300 } }}>
          <Dropdown
            label="Scenario"
            className="scenario"
            options={Scenarios}
            selectedKey={scenario.key}
            data-automationid="scenario"
            onChange={(ev, option) => {
              setItemsVisible(false);
              if (option) {
                setScenario(option);
              }
            }}
          />
          <TextField
            label="Component count"
            className="componentCount"
            value={String(count)}
            type="number"
            onChange={(ev, value) => {
              setItemsVisible(false);
              setCount(Number(value));
            }}
          />
          <TextField
            label="Iterations"
            className="iterations"
            value={String(iterations)}
            type="number"
            onChange={(ev, value) => {
              setItemsVisible(false);
              setIterations(Number(value));
            }}
          />
          <PrimaryButton text={itemsVisible ? 'Reset' : 'Run test'} onClick={() => setItemsVisible(!itemsVisible)} className="runTest" />
        </Stack>
<<<<<<< Updated upstream
        {timingsVisible && <MeasurerTimings />}
=======
        {timingsVisible && (
          <Stack>
            <Text className="total">
              <b>Total time:</b> {results.map(result => result.totalTime).join(', ')} ms
            </Text>
            <Text className="peritem">
              <b>Per item:</b> {results.map(result => result.individualTime).join(', ')} ms
            </Text>
          </Stack>
        )}
>>>>>>> Stashed changes
      </Stack>
      {itemsVisible && (
        <div>
          {Array.from({ length: count }, () => (
            <Measurer>{scenario.data.content}</Measurer>
          ))}
        </div>
      )}
    </div>
  );
};

  <b>Total time:</b> {results.map(result => result.totalTime).join(', ')} ms
  <b>Per item:</b> {results.map(result => result.individualTime).join(', ')} ms
