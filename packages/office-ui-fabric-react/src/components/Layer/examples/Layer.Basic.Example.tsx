import * as React from 'react';
import { AnimationClassNames, mergeStyleSets, getTheme } from 'office-ui-fabric-react/lib/Styling';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { Layer } from 'office-ui-fabric-react/lib/Layer';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

// tslint:disable:jsx-no-lambda

const theme = getTheme();
const classNames = mergeStyleSets({
  content: {
    backgroundColor: theme.palette.neutralPrimary,
    color: theme.palette.white,
    lineHeight: '50px',
    padding: '0 20px',
    display: 'flex'
  },
  textContent: {
    flexGrow: '1'
  }
});

const LayerContentExample: React.FunctionComponent = () => {
  const [time, setTime] = React.useState<string>(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()));
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css(classNames.content, AnimationClassNames.scaleUpIn100)}>
      <div className={classNames.textContent}>Hello world</div>
      <div>{time}</div>
    </div>
  );
};

export const LayerBasicExample: React.FunctionComponent = () => {
  const [showLayer, setShowLayer] = React.useState<boolean>(false);

  return (
    <div>
      <Toggle
        label="Wrap the content box below in a Layer"
        inlineLabel
        checked={showLayer}
        onChange={(ev: any, checked?: boolean) => setShowLayer(!!checked)}
      />

      {showLayer ? (
        <Layer>
          <LayerContentExample />
        </Layer>
      ) : (
        <LayerContentExample />
      )}
    </div>
  );
};
