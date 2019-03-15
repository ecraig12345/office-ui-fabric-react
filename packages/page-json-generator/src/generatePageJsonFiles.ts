import * as path from 'path';
import { generateJson } from './PageJsonGenerator';

// Generate JSON for office-ui-fabric-react
// TODO: this could potentially pull from the index.ts file or list of page files in fabric-website-resources/src/components/pages

generateJson({
  apiJsonPath: 'C:\\Users\\naethell\\office-ui-fabric-react\\packages\\office-ui-fabric-react\\dist\\office-ui-fabric-react.api.json',
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
  ]
});

// Generate JSON for styling
generateJson({
  apiJsonPath: 'C:\\Users\\naethell\\office-ui-fabric-react\\packages\\styling\\dist\\styling.api.json',
  pageJsonFolderPath: path.join(__dirname, '../../../common/pages/styling'),
  pageNames: ['ITheme', 'IScheme', 'IStyle']
});

// Generate JSON for utilities
generateJson({
  apiJsonPath: 'C:\\Users\\naethell\\office-ui-fabric-react\\packages\\utilities\\dist\\utilities.api.json',
  pageJsonFolderPath: path.join(__dirname, '../../../common/pages/utilities'),
  pageNames: []
});
