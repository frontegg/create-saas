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
    icon: '',
  },
  {
    path: '/services',
    label: 'Services',
    icon: '',
  },
  {
    path: '/anomalies',
    label: 'Anomalies',
    icon: '',
  },
  {
    header: 'ADMINISTRATION',
  },
  {
    path: '/administration/team',
    label: 'Team Management',
    icon: '',
  },
  {
    path: '/administration/audits',
    label: 'Audit Logs',
    icon: '',
  },
  {
    path: '/administration/sso',
    label: 'SSO',
    icon: '',
  },
  {
    path: '/administration/webhooks',
    label: 'Webhooks',
    icon: '',
  },
  {
      path: '/administration/slack',
      label: 'Slack',
      icon: '',
    },
];
