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
};
