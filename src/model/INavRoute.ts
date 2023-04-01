export interface INavRoute {
  title?: string;
  path: string;
  exact?: boolean;
  hideInMenu?: boolean;
  containParam?: boolean;
  params?: Array<Param>;

  locale?: string;
  name?: string;
  icon?: string;
  component?: string;
  routes?: INavRoute[];
  accessTO?: ("admin" | "customer" | "superAdmin")[];
  key?: string;
  parentKey?: string;
  redirect?: string;
  index?: boolean;
  hideInBreadCrumbs?: boolean;
}

export interface Param {
  id: string;
  value: string;
}
