import * as React from 'react';
import { INavPage, LoadingComponent } from '@uifabric/example-app-base/lib/index2';

export const controlsPagesAndroid: INavPage[] = [
  {
    title: 'Controls',
    url: '#/controls/android',
    isHiddenFromMainNav: true,
    component: () => <LoadingComponent title="Controls" />,
    getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/Overviews/ControlsPage/ControlsPage').ControlsPage))
  },
  {
    title: 'Basic Inputs',
    url: '#/controls/android/button',
    isCategory: true,
    pages: [
      {
        title: 'Button',
        url: '#/controls/android/button',
        component: () => <LoadingComponent title="Button" />,
        getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/Controls/ButtonPage/ButtonPage').ButtonPage))
      }
    ]
  },
  {
    title: 'Pickers',
    url: '#/controls/android/calendar',
    isCategory: true,
    pages: [
      {
        title: 'Calendar',
        url: '#/controls/android/calendar',
        component: () => <LoadingComponent title="Calendar" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/Controls/CalendarPage/CalendarPage').CalendarPage))
      },
      {
        title: 'Date & Time Picker',
        url: '#/controls/android/date-time-picker',
        component: () => <LoadingComponent title="Date & Time Picker" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/Controls/DatePickerPage/DatePickerPage').DatePickerPage))
      },
      {
        title: 'People Picker',
        url: '#/controls/android/peoplepicker',
        component: () => <LoadingComponent title="People Picker" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/Controls/PeoplePickerPage/PeoplePickerPage').PeoplePickerPage))
      }
    ]
  },
  {
    title: 'Items & Lists',
    url: '#/controls/android/avatar',
    isCategory: true,
    pages: [
      {
        title: 'Avatar',
        url: '#/controls/android/avatar',
        component: () => <LoadingComponent title="Avatar" />,
        getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/Controls/AvatarPage/AvatarPage').AvatarPage))
      },
      {
        title: 'Chip',
        url: '#/controls/android/chip',
        component: () => <LoadingComponent title="Chip" />,
        getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/Controls/ChipPage/ChipPage').ChipPage))
      },
      {
        title: 'Persona',
        url: '#/controls/android/persona',
        component: () => <LoadingComponent title="Persona" />,
        getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/Controls/PersonaPage/PersonaPage').PersonaPage))
      }
    ]
  },
  {
    title: 'Notification & Engagement',
    url: '#/controls/android/snackbar',
    isCategory: true,
    pages: [
      {
        title: 'Snackbar',
        url: '#/controls/android/snackbar',
        component: () => <LoadingComponent title="Snackbar" />,
        getComponent: cb =>
          require.ensure([], require => cb(require<any>('../../../pages/Controls/SnackbarPage/SnackbarPage').SnackbarPage))
      }
    ]
  },
  {
    title: 'Surfaces',
    url: '#/controls/android/drawer',
    isCategory: true,
    pages: [
      {
        title: 'Tooltip',
        url: '#/controls/android/tooltip',
        component: () => <LoadingComponent title="Tooltip" />,
        getComponent: cb => require.ensure([], require => cb(require<any>('../../../pages/Controls/TooltipPage/TooltipPage').TooltipPage))
      }
    ]
  }
];