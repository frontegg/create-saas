export type LinkType = {
  header?: string;
  path?: string;
  label?: string;
  icon?: string;
  sublinks?: LinkType[];
};

export const links: LinkType[] = [
  {
    header: 'CORE',
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
  },
  {
    path: '/services',
    label: 'Services',
  },
  {
    path: '/anomalies',
    label: 'Anomalies',
  },
  {
    header: 'ADMINISTRATION',
  },
  {
    path: '/administration/profile',
    label: 'My Profile',
  },
  {
    path: '/administration/team',
    label: 'Team Management',
  },
  {
    path: '/administration/sso',
    label: 'SSO',
  },
  {
    path: '/administration/api',
    label: 'API management',
  },
  {
    path: '/administration/account',
    label: 'Account',
  },
  {
    path: '/administration/personal',
    label: 'Personal',
  },
  {
    path: '/administration/webhooks',
    label: 'Webhooks',
  },
  {
    path: '/administration/events',
    label: 'Events & Alerts',
  },
  {
    path: '/administration/audits',
    label: 'Audit Logs',
  },
  {
    path: '/administration/reports',
    label: 'Reports',
  },
];
