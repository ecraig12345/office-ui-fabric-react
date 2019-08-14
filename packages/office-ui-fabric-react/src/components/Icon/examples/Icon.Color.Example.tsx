import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0 25px'
});
const classNames = mergeStyleSets({
  deepSkyBlue: [{ color: 'deepskyblue' }, iconClass],
  greenYellow: [{ color: 'greenyellow' }, iconClass],
  salmon: [{ color: 'salmon' }, iconClass]
});

export const IconColorExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon iconName="CompassNW" className={classNames.deepSkyBlue} />
      <Icon iconName="Dictionary" className={classNames.greenYellow} />
      <Icon iconName="TrainSolid" className={classNames.salmon} />
    </div>
  );
};
