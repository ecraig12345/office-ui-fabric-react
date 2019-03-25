import * as React from 'react';

// Props
import { INavPage } from '../Nav/Nav.types';
import { ComponentPage } from '../ComponentPage/ComponentPage';
import { PageHeader } from '../PageHeader/PageHeader';

// Giving the loading component a height so that the left nav loads in full screen and there is less flashing as the component page loads.
const loadingPageHeight: string = 'calc(100vh - 100px)';
const LoadingComponent = (props: any): JSX.Element => {
  return (
    <div style={{ height: loadingPageHeight }}>
      <ComponentPage>
        <PageHeader pageTitle={props.title} backgroundColor="#038387" />
      </ComponentPage>
    </div>
  );
};

export const referencePages: INavPage[] = [
  {
    title: 'ActivityItem',
    url: '#/references/activityitem',
    isFilterable: true,
    component: () => <LoadingComponent title="ActivityItem" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ActivityItemComponentPage').ActivityItemComponentPage))
  },
  {
    title: 'Announced',
    url: '#/references/announced',
    isFilterable: true,
    component: () => <LoadingComponent title="Announced" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/AnnouncedComponentPage').AnnouncedComponentPage))
  },
  {
    title: 'Autofill',
    url: '#/references/autofill',
    isFilterable: true,
    component: () => <LoadingComponent title="Autofill" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/AutofillComponentPage').AutofillComponentPage))
  },
  {
    title: 'Breadcrumb',
    url: '#/references/breadcrumb',
    isFilterable: true,
    component: () => <LoadingComponent title="Breadcrumb" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/BreadcrumbComponentPage').BreadcrumbComponentPage))
  },
  {
    title: 'Button',
    url: '#/references/button',
    isFilterable: true,
    component: () => <LoadingComponent title="Button" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ButtonComponentPage').ButtonComponentPage))
  },
  {
    title: 'Calendar',
    url: '#/references/calendar',
    isFilterable: true,
    component: () => <LoadingComponent title="Calendar" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/CalendarComponentPage').CalendarComponentPage))
  },
  {
    title: 'Callout',
    url: '#/references/callout',
    isFilterable: true,
    component: () => <LoadingComponent title="Callout" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/CalloutComponentPage').CalloutComponentPage))
  },
  {
    title: 'Checkbox',
    url: '#/references/checkbox',
    isFilterable: true,
    component: () => <LoadingComponent title="Checkbox" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/CheckboxComponentPage').CheckboxComponentPage))
  },
  {
    title: 'Check',
    url: '#/references/check',
    isFilterable: true,
    component: () => <LoadingComponent title="Check" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/CheckComponentPage').CheckComponentPage))
  },
  {
    title: 'ChoiceGroup',
    url: '#/references/choicegroup',
    isFilterable: true,
    component: () => <LoadingComponent title="ChoiceGroup" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ChoiceGroupComponentPage').ChoiceGroupComponentPage))
  },
  {
    title: 'Coachmark',
    url: '#/references/coachmark',
    isFilterable: true,
    component: () => <LoadingComponent title="Coachmark" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/CoachmarkComponentPage').CoachmarkComponentPage))
  },
  {
    title: 'ColorPicker',
    url: '#/references/colorpicker',
    isFilterable: true,
    component: () => <LoadingComponent title="ColorPicker" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ColorPickerComponentPage').ColorPickerComponentPage))
  },
  {
    title: 'ComboBox',
    url: '#/references/combobox',
    isFilterable: true,
    component: () => <LoadingComponent title="ComboBox" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ComboBoxComponentPage').ComboBoxComponentPage))
  },
  {
    title: 'CommandBar',
    url: '#/references/commandbar',
    isFilterable: true,
    component: () => <LoadingComponent title="CommandBar" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/CommandBarComponentPage').CommandBarComponentPage))
  },
  {
    title: 'ContextualMenu',
    url: '#/references/contextualmenu',
    isFilterable: true,
    component: () => <LoadingComponent title="ContextualMenu" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ContextualMenuComponentPage').ContextualMenuComponentPage))
  },
  {
    title: 'DatePicker',
    url: '#/references/datepicker',
    isFilterable: true,
    component: () => <LoadingComponent title="DatePicker" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DatePickerComponentPage').DatePickerComponentPage))
  },
  {
    title: 'DateRangeType',
    url: '#/references/daterangetype',
    isFilterable: true,
    component: () => <LoadingComponent title="DateRangeType" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DateRangeTypeComponentPage').DateRangeTypeComponentPage))
  },
  {
    title: 'DayOfWeek',
    url: '#/references/dayofweek',
    isFilterable: true,
    component: () => <LoadingComponent title="DayOfWeek" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DayOfWeekComponentPage').DayOfWeekComponentPage))
  },
  {
    title: 'DetailsList',
    url: '#/references/detailslist',
    isFilterable: true,
    component: () => <LoadingComponent title="DetailsList" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DetailsListComponentPage').DetailsListComponentPage))
  },
  {
    title: 'Dialog',
    url: '#/references/dialog',
    isFilterable: true,
    component: () => <LoadingComponent title="Dialog" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/DialogComponentPage').DialogComponentPage))
  },
  {
    title: 'Divider',
    url: '#/references/divider',
    isFilterable: true,
    component: () => <LoadingComponent title="Divider" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/DividerComponentPage').DividerComponentPage))
  },
  {
    title: 'DocumentCard',
    url: '#/references/documentcard',
    isFilterable: true,
    component: () => <LoadingComponent title="DocumentCard" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DocumentCardComponentPage').DocumentCardComponentPage))
  },
  {
    title: 'Dropdown',
    url: '#/references/dropdown',
    isFilterable: true,
    component: () => <LoadingComponent title="Dropdown" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/DropdownComponentPage').DropdownComponentPage))
  },
  {
    title: 'ExtendedPeoplePicker',
    url: '#/references/extendedpeoplepicker',
    isFilterable: true,
    component: () => <LoadingComponent title="ExtendedPeoplePicker" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/ExtendedPeoplePickerComponentPage').ExtendedPeoplePickerComponentPage)
      )
  },
  {
    title: 'ExtendedPicker',
    url: '#/references/extendedpicker',
    isFilterable: true,
    component: () => <LoadingComponent title="ExtendedPicker" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ExtendedPickerComponentPage').ExtendedPickerComponentPage))
  },
  {
    title: 'Facepile',
    url: '#/references/facepile',
    isFilterable: true,
    component: () => <LoadingComponent title="Facepile" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/FacepileComponentPage').FacepileComponentPage))
  },
  {
    title: 'FirstWeekOfYear',
    url: '#/references/firstweekofyear',
    isFilterable: true,
    component: () => <LoadingComponent title="FirstWeekOfYear" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/FirstWeekOfYearComponentPage').FirstWeekOfYearComponentPage))
  },
  {
    title: 'FloatingPeoplePicker',
    url: '#/references/floatingpeoplepicker',
    isFilterable: true,
    component: () => <LoadingComponent title="FloatingPeoplePicker" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/FloatingPeoplePickerComponentPage').FloatingPeoplePickerComponentPage)
      )
  },
  {
    title: 'FloatingPicker',
    url: '#/references/floatingpicker',
    isFilterable: true,
    component: () => <LoadingComponent title="FloatingPicker" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/FloatingPickerComponentPage').FloatingPickerComponentPage))
  },
  {
    title: 'FocusTrapZone',
    url: '#/references/focustrapzone',
    isFilterable: true,
    component: () => <LoadingComponent title="FocusTrapZone" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/FocusTrapZoneComponentPage').FocusTrapZoneComponentPage))
  },
  {
    title: 'FocusZone',
    url: '#/references/focuszone',
    isFilterable: true,
    component: () => <LoadingComponent title="FocusZone" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/FocusZoneComponentPage').FocusZoneComponentPage))
  },
  {
    title: 'GroupedList',
    url: '#/references/groupedlist',
    isFilterable: true,
    component: () => <LoadingComponent title="GroupedList" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/GroupedListComponentPage').GroupedListComponentPage))
  },
  {
    title: 'HoverCard',
    url: '#/references/hovercard',
    isFilterable: true,
    component: () => <LoadingComponent title="HoverCard" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/HoverCardComponentPage').HoverCardComponentPage))
  },
  {
    title: 'IAnimationStyles',
    url: '#/references/ianimationstyles',
    isFilterable: true,
    component: () => <LoadingComponent title="IAnimationStyles" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IAnimationStylesComponentPage').IAnimationStylesComponentPage))
  },
  {
    title: 'Icon',
    url: '#/references/icon',
    isFilterable: true,
    component: () => <LoadingComponent title="Icon" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/IconComponentPage').IconComponentPage))
  },
  {
    title: 'IFontStyles',
    url: '#/references/ifontstyles',
    isFilterable: true,
    component: () => <LoadingComponent title="IFontStyles" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IFontStylesComponentPage').IFontStylesComponentPage))
  },
  {
    title: 'Image',
    url: '#/references/image',
    isFilterable: true,
    component: () => <LoadingComponent title="Image" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ImageComponentPage').ImageComponentPage))
  },
  {
    title: 'IPalette',
    url: '#/references/ipalette',
    isFilterable: true,
    component: () => <LoadingComponent title="IPalette" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/IPaletteComponentPage').IPaletteComponentPage))
  },
  {
    title: 'IScheme',
    url: '#/references/ischeme',
    isFilterable: true,
    component: () => <LoadingComponent title="IScheme" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ISchemeComponentPage').ISchemeComponentPage))
  },
  {
    title: 'ISemanticColors',
    url: '#/references/isemanticcolors',
    isFilterable: true,
    component: () => <LoadingComponent title="ISemanticColors" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ISemanticColorsComponentPage').ISemanticColorsComponentPage))
  },
  {
    title: 'ISemanticTextColors',
    url: '#/references/isemantictextcolors',
    isFilterable: true,
    component: () => <LoadingComponent title="ISemanticTextColors" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/ISemanticTextColorsComponentPage').ISemanticTextColorsComponentPage)
      )
  },
  {
    title: 'ITheme',
    url: '#/references/itheme',
    isFilterable: true,
    component: () => <LoadingComponent title="ITheme" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/IThemeComponentPage').IThemeComponentPage))
  },
  {
    title: 'Keytip',
    url: '#/references/keytip',
    isFilterable: true,
    component: () => <LoadingComponent title="Keytip" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/KeytipComponentPage').KeytipComponentPage))
  },
  {
    title: 'Label',
    url: '#/references/label',
    isFilterable: true,
    component: () => <LoadingComponent title="Label" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/LabelComponentPage').LabelComponentPage))
  },
  {
    title: 'Layer',
    url: '#/references/layer',
    isFilterable: true,
    component: () => <LoadingComponent title="Layer" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/LayerComponentPage').LayerComponentPage))
  },
  {
    title: 'Link',
    url: '#/references/link',
    isFilterable: true,
    component: () => <LoadingComponent title="Link" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/LinkComponentPage').LinkComponentPage))
  },
  {
    title: 'List',
    url: '#/references/list',
    isFilterable: true,
    component: () => <LoadingComponent title="List" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ListComponentPage').ListComponentPage))
  },
  {
    title: 'MarqueeSelection',
    url: '#/references/marqueeselection',
    isFilterable: true,
    component: () => <LoadingComponent title="MarqueeSelection" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/MarqueeSelectionComponentPage').MarqueeSelectionComponentPage))
  },
  {
    title: 'MessageBar',
    url: '#/references/messagebar',
    isFilterable: true,
    component: () => <LoadingComponent title="MessageBar" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/MessageBarComponentPage').MessageBarComponentPage))
  },
  {
    title: 'Modal',
    url: '#/references/modal',
    isFilterable: true,
    component: () => <LoadingComponent title="Modal" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ModalComponentPage').ModalComponentPage))
  },
  {
    title: 'Nav',
    url: '#/references/nav',
    isFilterable: true,
    component: () => <LoadingComponent title="Nav" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/NavComponentPage').NavComponentPage))
  },
  {
    title: 'OverflowSet',
    url: '#/references/overflowset',
    isFilterable: true,
    component: () => <LoadingComponent title="OverflowSet" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/OverflowSetComponentPage').OverflowSetComponentPage))
  },
  {
    title: 'Overlay',
    url: '#/references/overlay',
    isFilterable: true,
    component: () => <LoadingComponent title="Overlay" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/OverlayComponentPage').OverlayComponentPage))
  },
  {
    title: 'Panel',
    url: '#/references/panel',
    isFilterable: true,
    component: () => <LoadingComponent title="Panel" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/PanelComponentPage').PanelComponentPage))
  },
  {
    title: 'PeoplePicker',
    url: '#/references/peoplepicker',
    isFilterable: true,
    component: () => <LoadingComponent title="PeoplePicker" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/PeoplePickerComponentPage').PeoplePickerComponentPage))
  },
  {
    title: 'Persona',
    url: '#/references/persona',
    isFilterable: true,
    component: () => <LoadingComponent title="Persona" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/PersonaComponentPage').PersonaComponentPage))
  },
  {
    title: 'Pickers',
    url: '#/references/pickers',
    isFilterable: true,
    component: () => <LoadingComponent title="Pickers" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/PickersComponentPage').PickersComponentPage))
  },
  {
    title: 'Pivot',
    url: '#/references/pivot',
    isFilterable: true,
    component: () => <LoadingComponent title="Pivot" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/PivotComponentPage').PivotComponentPage))
  },
  {
    title: 'Popup',
    url: '#/references/popup',
    isFilterable: true,
    component: () => <LoadingComponent title="Popup" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/PopupComponentPage').PopupComponentPage))
  },
  {
    title: 'PositioningContainer',
    url: '#/references/positioningcontainer',
    isFilterable: true,
    component: () => <LoadingComponent title="PositioningContainer" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/PositioningContainerComponentPage').PositioningContainerComponentPage)
      )
  },
  {
    title: 'ProgressIndicator',
    url: '#/references/progressindicator',
    isFilterable: true,
    component: () => <LoadingComponent title="ProgressIndicator" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/ProgressIndicatorComponentPage').ProgressIndicatorComponentPage)
      )
  },
  {
    title: 'Rating',
    url: '#/references/rating',
    isFilterable: true,
    component: () => <LoadingComponent title="Rating" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/RatingComponentPage').RatingComponentPage))
  },
  {
    title: 'ResizeGroup',
    url: '#/references/resizegroup',
    isFilterable: true,
    component: () => <LoadingComponent title="ResizeGroup" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ResizeGroupComponentPage').ResizeGroupComponentPage))
  },
  {
    title: 'ScrollablePane',
    url: '#/references/scrollablepane',
    isFilterable: true,
    component: () => <LoadingComponent title="ScrollablePane" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/ScrollablePaneComponentPage').ScrollablePaneComponentPage))
  },
  {
    title: 'SearchBox',
    url: '#/references/searchbox',
    isFilterable: true,
    component: () => <LoadingComponent title="SearchBox" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/SearchBoxComponentPage').SearchBoxComponentPage))
  },
  {
    title: 'SelectableOption',
    url: '#/references/selectableoption',
    isFilterable: true,
    component: () => <LoadingComponent title="SelectableOption" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/SelectableOptionComponentPage').SelectableOptionComponentPage))
  },
  {
    title: 'SelectedItemsList',
    url: '#/references/selecteditemslist',
    isFilterable: true,
    component: () => <LoadingComponent title="SelectedItemsList" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/SelectedItemsListComponentPage').SelectedItemsListComponentPage)
      )
  },
  {
    title: 'SelectedPeopleList',
    url: '#/references/selectedpeoplelist',
    isFilterable: true,
    component: () => <LoadingComponent title="SelectedPeopleList" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/SelectedPeopleListComponentPage').SelectedPeopleListComponentPage)
      )
  },
  {
    title: 'Shimmer',
    url: '#/references/shimmer',
    isFilterable: true,
    component: () => <LoadingComponent title="Shimmer" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ShimmerComponentPage').ShimmerComponentPage))
  },
  {
    title: 'Slider',
    url: '#/references/slider',
    isFilterable: true,
    component: () => <LoadingComponent title="Slider" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/SliderComponentPage').SliderComponentPage))
  },
  {
    title: 'SpinButton',
    url: '#/references/spinbutton',
    isFilterable: true,
    component: () => <LoadingComponent title="SpinButton" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/SpinButtonComponentPage').SpinButtonComponentPage))
  },
  {
    title: 'Spinner',
    url: '#/references/spinner',
    isFilterable: true,
    component: () => <LoadingComponent title="Spinner" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/SpinnerComponentPage').SpinnerComponentPage))
  },
  {
    title: 'Stack',
    url: '#/references/stack',
    isFilterable: true,
    component: () => <LoadingComponent title="Stack" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/StackComponentPage').StackComponentPage))
  },
  {
    title: 'SwatchColorPicker',
    url: '#/references/swatchcolorpicker',
    isFilterable: true,
    component: () => <LoadingComponent title="SwatchColorPicker" />,
    getComponent: cb =>
      require.ensure([], require =>
        cb(require<any>('../../pages/References/SwatchColorPickerComponentPage').SwatchColorPickerComponentPage)
      )
  },
  {
    title: 'TeachingBubble',
    url: '#/references/teachingbubble',
    isFilterable: true,
    component: () => <LoadingComponent title="TeachingBubble" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/TeachingBubbleComponentPage').TeachingBubbleComponentPage))
  },
  {
    title: 'Text',
    url: '#/references/text',
    isFilterable: true,
    component: () => <LoadingComponent title="Text" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/TextComponentPage').TextComponentPage))
  },
  {
    title: 'TextField',
    url: '#/references/textfield',
    isFilterable: true,
    component: () => <LoadingComponent title="TextField" />,
    getComponent: cb =>
      require.ensure([], require => cb(require<any>('../../pages/References/TextFieldComponentPage').TextFieldComponentPage))
  },
  {
    title: 'Toggle',
    url: '#/references/toggle',
    isFilterable: true,
    component: () => <LoadingComponent title="Toggle" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/ToggleComponentPage').ToggleComponentPage))
  },
  {
    title: 'Tooltip',
    url: '#/references/tooltip',
    isFilterable: true,
    component: () => <LoadingComponent title="Tooltip" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../pages/References/TooltipComponentPage').TooltipComponentPage))
  }
];
