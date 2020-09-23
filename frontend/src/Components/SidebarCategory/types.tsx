export interface ISidebarCategory {
  itemsList: IItemsList;
}
// itemsList
export interface IItemsList {
  buttons: { label: string; badge: number }[];
  categories: string[];
  labels: string[];
}
