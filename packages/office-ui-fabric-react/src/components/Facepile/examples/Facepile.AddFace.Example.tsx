import * as React from 'react';
import { Facepile, OverflowButtonType } from 'office-ui-fabric-react/lib/Facepile';
import { facepilePersonas } from 'office-ui-fabric-react/lib/components/Facepile/examples/FacepileExampleData';

export const FacepileAddFaceExample: React.FunctionComponent = () => {
  const [numberOfFaces, setNumberOfFaces] = React.useState<number>(0);

  return (
    <Facepile
      personas={facepilePersonas.slice(0, numberOfFaces)}
      maxDisplayablePersonas={5}
      overflowButtonProps={{
        ariaLabel: 'More users',
        onClick: () => alert('overflow icon clicked')
      }}
      overflowButtonType={OverflowButtonType.descriptive}
      showAddButton={true}
      addButtonProps={{
        ariaLabel: 'Add a new person',
        onClick: () => setNumberOfFaces(numberOfFaces + 1)
      }}
      ariaDescription="To move through the items use left and right arrow keys."
    />
  );
};
