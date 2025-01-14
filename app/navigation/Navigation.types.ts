export type CategoryType = {
  fetchKey: string;
  fetchParam: string;
  name: string;
  hideTabs: boolean;
};

export type RootStackParamList = {
  Categories_Screen: undefined;
  Category_Offers: CategoryType;
};
