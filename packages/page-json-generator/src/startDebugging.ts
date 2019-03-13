import * as path from 'path';
import { generateJson } from './PageJsonGenerator';

// Generate JSON for office-ui-fabric-react
generateJson({
  apiJsonPath: 'C:\\Users\\naethell\\office-ui-fabric-react\\packages\\office-ui-fabric-react\\dist\\office-ui-fabric-react.api.json',
  pageJsonFolderPath: path.join(__dirname, '../../../common/pages'),
  pageNames: ['Button', 'Breadcrumb', 'Calendar', 'Callout', 'Checkbox', 'ChoiceGroup', 'ComboBox', 'Icon']
});

// // Generate JSON for styling
// pageJsonGenerator.generateJson({
//   apiJsonPath: 'C:\\Users\\naethell\\office-ui-fabric-react\\packages\\styling\\dist\\styling.api.json',
//   pageJsonFolderPath: path.join(__dirname, '../../../common/pages'),
//   pageNames: ['ITheme', 'IScheme', 'IStyle']
// });

// // Generate JSON for utilities
// pageJsonGenerator.generateJson({
//   apiJsonPath: 'C:\\Users\\naethell\\office-ui-fabric-react\\packages\\utilities\\dist\\utilities.api.json',
//   pageJsonFolderPath: path.join(__dirname, '../temp/utilitiesPages'),
//   pageNames: []
// });
