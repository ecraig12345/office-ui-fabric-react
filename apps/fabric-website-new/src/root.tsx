import { registerIcons } from 'office-ui-fabric-react';
import { createSite } from './utilities/createSite';
import * as platformPickerStyles from '@uifabric/example-app-base/lib/components/PlatformPicker/PlatformPicker.module.scss';
import { SiteDefinition } from './SiteDefinition/index';
import { HomePage } from './pages/HomePage/HomePage';
import { AndroidLogo, AppleLogo } from './utilities/index';

registerIcons({
  icons: {
    'AndroidLogo-platformPicker': AndroidLogo({
      className: platformPickerStyles.icon,
      iconGroupClassName: platformPickerStyles.androidLogo
    }),
    'AppleLogo-platformPicker': AppleLogo({ className: platformPickerStyles.icon, iconGroupClassName: platformPickerStyles.appleLogo })
  }
});

createSite(SiteDefinition, HomePage);
