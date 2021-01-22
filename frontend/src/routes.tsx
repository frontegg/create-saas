export type TRoute = {
  header?: string;
  path?: string;
  label?: string;
  icon?: string;
};

export type TObjectRoute = Record<string, TRoute>;

export const routes: TObjectRoute = {
  core: {
    header: 'CORE',
  },
  dashboard: {
    path: '/dashboard',
    label: 'Dashboard',
  },
  services: {
    path: '/services',
    label: 'Services',
  },
  anomalies: {
    path: '/anomalies',
    label: 'Anomalies',
  },
  administration: {
    header: 'ADMINISTRATION',
  },
  profile: {
    path: '/profile',
    label: 'My Profile',
  },
  team: {
    path: '/administration/team',
    label: 'Team Management',
  },
  sso: {
    path: '/administration/sso',
    label: 'SSO',
  },
  api: {
    path: '/administration/api',
    label: 'API management',
  },
  webhooks: {
    path: '/administration/webhooks',
    label: 'Webhooks',
  },
  events: {
    path: '/administration/events',
    label: 'Events & Alerts',
  },
  audits: {
    path: '/administration/audits',
    label: 'Audit Logs',
  },
  // It doesn't use now
  reports: {
    path: '/administration/reports',
    label: 'Reports',
  },
};
