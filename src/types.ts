import { BrowserRouteType, HashRouteType } from './constant';

export type RouteType = typeof BrowserRouteType | typeof HashRouteType;

export type Params = {
  [s: string]: '';
};

export type Routes = {
  pathname: string;
  element: () => Element | DocumentFragment;
  children?: Routes[];
};

export type GetParams = {
  pathname: string;
  searchedPathname: string;
};

export type RouteLocation = {
  pathname: string;
  params: Params;
  search: Record<string, string>;
  hash: string;
};

export type Route = {
  element: () => Element | DocumentFragment;
  params: Params;
  isSubRoute: boolean;
  nestedLevel: number;
};

export type PushHistory = {
  addToHistory?: boolean;
  state?: Record<string, string>;
};

export type RouteWithLocation = Route & RouteLocation;
