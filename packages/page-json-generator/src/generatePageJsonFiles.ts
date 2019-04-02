import * as path from 'path';
import { generateJson, PageKind } from './PageJsonGenerator';

// Generate JSON for office-ui-fabric-react, styling, and utilities
// TODO: this could potentially pull from the index.ts file or list of page files in fabric-website-resources/src/components/pages

generateJson([
  {
    apiJsonPaths: [
      path.join(__dirname, '../../../packages/styling/dist/styling.api.json'),
      path.join(__dirname, '../../../packages/utilities/dist/utilities.api.json'),
      path.join(__dirname, '../../../packages/merge-styles/dist/merge-styles.api.json')
    ],
    pageJsonFolderPath: path.join(__dirname, '../../../common/pages/references'),
    pageNames: [],
    kind: PageKind.References
  },
  {
    apiJsonPaths: [path.join(__dirname, '../../../packages/office-ui-fabric-react/dist/office-ui-fabric-react.api.json')],
    pageJsonFolderPath: path.join(__dirname, '../../../common/pages/office-ui-fabric-react'),
    pageNames: [
      'ActivityItem',
      'Autofill',
      'Announced',
      'Breadcrumb',
      'Button',
      'Calendar',
      'Callout',
      'Checkbox',
      'ChoiceGroup',
      'Coachmark',
      'ColorPicker',
      'ComboBox',
      'CommandBar',
      'ContextualMenu',
      'DatePicker',
      'DetailsList',
      'Dialog',
      'Divider',
      'DocumentCard',
      'Dropdown',
      'ExtendedPeoplePicker',
      'ExtendedPicker',
      'Facepile',
      'FloatingPeoplePicker',
      'FloatingPicker',
      'FocusTrapZone',
      'FocusZone',
      'GroupedList',
      'HoverCard',
      'Icon',
      'Image',
      'Keytip',
      'Label',
      'Layer',
      'Link',
      'List',
      'MarqueeSelection',
      'MessageBar',
      'Modal',
      'Nav',
      'OverflowSet',
      'Overlay',
      'Panel',
      'PeoplePicker',
      'Persona',
      'Pickers',
      'Pivot',
      'Popup',
      'PositioningContainer',
      'ProgressIndicator',
      'Rating',
      'ResizeGroup',
      'SelectedPeopleList',
      'ScrollablePane',
      'SearchBox',
      'SelectableOption',
      'SelectedItemsList',
      'Shimmer',
      'Slider',
      'SpinButton',
      'Spinner',
      'Stack',
      'SwatchColorPicker',
      'TeachingBubble',
      'Text',
      'TextField',
      'Toggle',
      'Tooltip'
    ],
    kind: PageKind.Components
  }
]);
