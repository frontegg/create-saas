import sidebarContents from './types';

type linksArray = sidebarContents[];

export const links: linksArray = [
  {
    header: 'APPLICATIONS',
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: '',
  },
  {
    header: 'COMPONENTS',
  },
  {
    path: '/ui-elements',
    label: 'UI Elements',
    icon: '',
    sublinks: [
      {
        path: '/badges',
        label: 'Badges',
        icon: '',
      },
      {
        path: '/breadcrumbs',
        label: 'Breadcrumbs',
        icon: '',
      },
      {
        path: '/buttons',
        label: 'Buttons',
        icon: '',
      },
      {
        path: '/dropdowns',
        label: 'Dropdowns',
        icon: '',
      },
      {
        path: '/images',
        label: 'Images',
        icon: '',
      },
      {
        path: '/lists',
        label: 'Lists',
        icon: '',
      },
      {
        path: '/progress-bar',
        label: 'Progress bar',
        icon: '',
      },
      {
        path: '/pagination',
        label: 'Pagination',
        icon: '',
      },
      {
        path: '/tabs',
        label: 'Tabs',
        icon: '',
      },
      {
        path: '/typography',
        label: 'Typography',
        icon: '',
      },
      {
        path: '/alerts',
        label: 'Alerts',
        icon: '',
      },
      {
        path: '/notifications',
        label: 'React notifications',
        icon: '',
      },
    ],
  },
  {
    path: '/tables',
    label: 'Table screen',
    icon: '',
    sublinks: [
      {
        path: '/regular',
        label: 'Regular table',
        icon: '',
      },
      {
        path: '/sidebar-category',
        label: 'Sidebar category table',
        icon: '',
      },
      {
        path: '/datatable',
        label: 'Datatable',
        icon: '',
      },
    ],
  },
  {
    path: '/forms',
    label: 'Form screen',
    icon: '',
    sublinks: [
      {
        path: '/sample-forms',
        label: 'Sample forms',
        icon: '',
      },
      {
        path: '/default-forms',
        label: 'Default forms',
        icon: '',
      },
      {
        path: '/sliders',
        label: 'Sliders',
        icon: '',
      },
      {
        path: '/switches',
        label: 'Switches',
        icon: '',
      },
      {
        path: '/formsteps',
        label: 'Form steps',
        icon: '',
      },
      {
        path: '/validation',
        label: 'Form validation',
        icon: '',
      },
    ],
  },
  {
    path: '/enterprise',
    label: 'Enterprise',
    icon: '',
    sublinks: [
      {
        path: '/team',
        label: 'Team Management',
        icon: '',
      },
      {
        path: '/audits',
        label: 'Audit Logs',
        icon: '',
      },
      {
        path: '/sso',
        label: 'SSO',
        icon: '',
      },
      {
        path: '/webhooks',
        label: 'Webhooks',
        icon: '',
      },
      {
        path: '/slack',
        label: 'Slack',
        icon: '',
      },
      {
        path: '/validation',
        label: 'Form validation',
        icon: '',
      },
    ],
  },
];
