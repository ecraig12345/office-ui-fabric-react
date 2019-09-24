import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TestImages } from '@uifabric/example-data';
import { useConstCallback } from '@uifabric/react-hooks';

const options: IChoiceGroupOption[] = [
  {
    key: 'bar',
    imageSrc: TestImages.choiceGroupBarUnselected,
    imageAlt: 'Bar chart icon',
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: 'Clustered bar chart' // This text is long to show text wrapping.
  },
  {
    key: 'pie',
    imageSrc: TestImages.choiceGroupBarUnselected,
    selectedImageSrc: TestImages.choiceGroupBarSelected,
    imageSize: { width: 32, height: 32 },
    text: 'Pie chart'
  }
];

export const ChoiceGroupImageExample: React.FunctionComponent = () => {
  const [selectedKey, setSelectedKey] = React.useState<string>('bar');

  const onChange = useConstCallback((ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
    setSelectedKey(option.key);
  });

  return <ChoiceGroup label="Pick one image" selectedKey={selectedKey} options={options} onChange={onChange} />;
};
