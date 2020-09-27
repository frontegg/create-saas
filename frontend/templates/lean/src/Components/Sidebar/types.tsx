export type sidebarHeadlineType = {
  header: string;
};
export type sidebarLinkType = {
  path: string;
  label: string;
  icon: string;
};

export type sidebarLinkWithSubType = {
  path: string;
  label: string;
  icon: string;
  sublinks: (sidebarHeadlineType | sidebarLinkType | sidebarLinkWithSubType)[];
};

type sidebarContentsType = sidebarHeadlineType | sidebarLinkType | sidebarLinkWithSubType;
export default sidebarContentsType;
