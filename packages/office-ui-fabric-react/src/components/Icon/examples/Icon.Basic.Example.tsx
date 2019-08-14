import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0 25px'
});

export const IconBasicExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon iconName="CompassNW" className={iconClass} />
      <Icon iconName="Dictionary" className={iconClass} />
      <Icon iconName="TrainSolid" className={iconClass} />
    </div>
  );
};
