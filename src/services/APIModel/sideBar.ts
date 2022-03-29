export interface IResponse {
  code: number;
  msg: string;
  data?: ISideBar;
}
export interface ISideBar {
  sideBarList: ISideBarItem[];
}
export interface ISideBarItem {
  subSideBar?: ISubSideBarItem[];
  index: string;
  name: string;
  path?: string;
  icon?: string;
  element?: any;
}
export interface ISubSideBarItem {
  index: string;
  name: string;
  path: string;
  icon?: string;
  element: any;
}
