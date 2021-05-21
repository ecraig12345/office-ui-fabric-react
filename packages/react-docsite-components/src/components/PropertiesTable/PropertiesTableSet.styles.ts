import { FontSizes, FontWeights } from '@fluentui/react/lib/Styling';
import { IStyleFunction } from '@fluentui/react/lib/Utilities';
import { NeutralColors } from '@fluentui/react/lib/Theme';
import { IPropertiesTableSetStyleProps, IPropertiesTableSetStyles } from './PropertiesTableSet.types';

export const getStyles: IStyleFunction<IPropertiesTableSetStyleProps, IPropertiesTableSetStyles> = props => {
  return {
    tableRoot: [
      {
        marginBottom: 20,
        overflowX: 'auto',
        overflowY: 'inherit',
      },
      'PropertiesTable',
    ],
    tableHeader: {
      fontSize: FontSizes.size20,
      fontWeight: FontWeights.semibold,
      color: NeutralColors.gray130,
      lineHeight: '1', // quotes to prevent interpretation as px
    },
  };
};
