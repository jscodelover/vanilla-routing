declare const BrowserRouteType = "BrowserRoute";
declare const HashRouteType = "HashRoute";
declare const DefaultNestedLevel = 0;
declare const _404RRoute: {
    element: () => never;
    params: {};
    isSubRoute: boolean;
    nestedLevel: number;
};
declare const DefaultRoute: {
    '*': {
        element: () => never;
        params: {};
        isSubRoute: boolean;
        nestedLevel: number;
    };
};

type RouteType = typeof BrowserRouteType | typeof HashRouteType;
type Params = {
    [s: string]: '';
};
type Routes = {
    pathname: string;
    element: () => Element | DocumentFragment | Promise<Element | DocumentFragment>;
    children?: Routes[];
};
type GetParams = {
    pathname: string;
    searchedPathname: string;
};
type RouteLocation = {
    pathname: string;
    params: Params;
    search: Record<string, string>;
    hash: string;
};
type Route = {
    element: () => Element | DocumentFragment | Promise<Element | DocumentFragment>;
    params: Params;
    isSubRoute: boolean;
    nestedLevel: number;
};
type PushHistory = {
    addToHistory?: boolean;
    state?: Record<string, string>;
};
type RouteWithLocation = Route & RouteLocation;

declare class RouterManagement implements RouterManagement {
    #private;
    routeType: RouteType;
    getRoutes(): Record<string, Route>;
    go(searchPathname: string, options?: PushHistory): void;
    dispose<T extends () => void>(cb: T): void;
    getLocation(): RouteLocation;
    back(): void;
    forward(): void;
    refresh(): void;
    replace(searchPathname: string, state?: PushHistory['state']): void;
    config(routeData: Routes[], basePath?: string): void;
    private resolveElement;
}
declare class RouterSetup extends RouterManagement {
    #private;
    browserRoute(routeData: Routes[]): void;
    hashRoute(routeData: Routes[]): void;
}
declare const Router: RouterSetup;
declare const BrowserRoute: (routes: Routes[]) => void;
declare const HashRoute: (routes: Routes[]) => void;
declare const routeLocation: () => RouteLocation;
declare const router: () => Record<string, Route>;

export { BrowserRoute, BrowserRouteType, DefaultNestedLevel, DefaultRoute, GetParams, HashRoute, HashRouteType, Params, PushHistory, Route, RouteLocation, RouteType, RouteWithLocation, Router, Routes, _404RRoute, routeLocation, router };
