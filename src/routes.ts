import {
  BrowserRouteType,
  DefaultNestedLevel,
  DefaultRoute,
  HashRouteType,
} from './constant';
import {
  GetParams,
  PushHistory,
  Route,
  RouteLocation,
  Routes,
  RouteType,
  RouteWithLocation,
} from './types';

class RouterManagement implements RouterManagement {
  #location: RouteLocation = {
    pathname: '/',
    params: {},
    search: {},
    hash: '',
  };
  #routes: Record<string, Route> = DefaultRoute;
  #disposeCb: Record<string, () => void> = {};
  routeType: RouteType = BrowserRouteType;

  getRoutes() {
    return this.#routes;
  }

  #splitPath(path: string) {
    return path.split('/').slice(2);
  }

  #setParamsKeys(paramsKey: string[]) {
    return paramsKey.reduce((obj, key) => ({ ...obj, [key]: '' }), {});
  }

  #setParamsValues({
    paramsKey,
    paramsValue,
  }: {
    paramsKey: string[];
    paramsValue: string[];
  }) {
    return paramsKey.reduce(
      (obj, key, index) => ({ ...obj, [key]: paramsValue[index] ?? '' }),
      {}
    );
  }

  #getQueryString(path: string) {
    const pathWithoutHash = this.#removeHash(path);
    const str = pathWithoutHash.indexOf('?');
    if (str > -1) {
      const queryString = pathWithoutHash.slice(str + 1);
      const queryStringArr = queryString.split('&');

      return queryStringArr.reduce((obj, queryParams) => {
        const [key, value] = queryParams.split('=');

        return { ...obj, [key as string]: value };
      }, {});
    }
    return {};
  }

  #getHash(path: string) {
    const str = path.lastIndexOf('#');
    return str > -1 ? path.slice(str) : '';
  }

  #getParams({ pathname, searchedPathname }: GetParams) {
    const routeInfo = this.#routes[pathname]!;

    const paramsValue = this.#splitPath(searchedPathname);
    const paramsKey = Object.keys(routeInfo.params);

    return this.#setParamsValues({
      paramsKey,
      paramsValue,
    });
  }

  #getPath(inputStr: string) {
    // Define a regular expression pattern to match the desired string
    const pattern = /^\/[a-zA-Z0-9\\-]*|[\\/]/;

    // Find the first match in the input string
    const match = inputStr.match(pattern);

    return match?.[0];
  }

  #checkEqualPath({
    searchedPathname,
    pathname,
  }: {
    searchedPathname: string;
    pathname: string;
  }) {
    const searchPathnameArr =
      this.#removeQueryParamsAndHash(searchedPathname).split('/');
    const pathnameArr = pathname.split('/');
    if (searchPathnameArr.length === pathnameArr.length) {
      return pathnameArr.every(
        (path, index) =>
          path.indexOf(':') >= 0 ||
          (path.indexOf(':') < 0 && searchPathnameArr[index] === path)
      );
    }
    return false;
  }

  #removeQueryParams(path: string) {
    const paramsPos = path.indexOf('?');
    return paramsPos > -1 ? path.slice(0, paramsPos) : path;
  }
  #removeHash(path: string) {
    const hashPosition = path.indexOf('#');
    return hashPosition > -1 ? path.slice(0, hashPosition) : path;
  }
  #removeQueryParamsAndHash(path: string) {
    const pathWithoutHash = this.#removeHash(path);
    return this.#removeQueryParams(pathWithoutHash);
  }

  #getRoute(searchedPathname: string): RouteWithLocation {
    const searchedPath = this.#getPath(searchedPathname);

    let routeData = this.#routes['*']!;
    let pathInfo = '*';

    for (const pathname in this.#routes) {
      const routeInfo = this.#routes[pathname]!;
      const path = this.#getPath(pathname);

      if (!this.#checkEqualPath({ searchedPathname, pathname })) {
        continue;
      }

      pathInfo = pathname;
      if (pathname === searchedPathname) {
        routeData = routeInfo;
        break;
      }

      if (!searchedPath || path === searchedPath) {
        routeData = {
          ...routeInfo,
          params: this.#getParams({
            pathname,
            searchedPathname: this.#removeQueryParamsAndHash(searchedPathname),
          }),
        };
        break;
      }
    }

    return {
      ...routeData,
      pathname: pathInfo,
      search: this.#getQueryString(searchedPathname),
      hash: this.#getHash(searchedPathname),
    };
  }

  #directRoute(routeRenderEle: Element[], routeData: RouteWithLocation) {
    const { nestedLevel, element } = routeData;
    const routeEle = routeRenderEle[nestedLevel];
    if (routeEle) {
      routeEle.innerHTML = '';
      routeEle.appendChild(element());
    }
  }

  #directNestedRoute(searchPathname: string, routeData: RouteWithLocation) {
    const { nestedLevel, pathname } = routeData;

    const renderRouteEle = [
      ...document.querySelectorAll('[data-vanilla-route-ele="router-wrap"]'),
    ];

    // number of the sub-route element which have the content
    const routeElementsLen = renderRouteEle.length - 1;

    const cleanPath = this.#removeQueryParamsAndHash(searchPathname).split('/');

    // with/without existing route path
    const pathArr =
      pathname === '*'
        ? cleanPath.slice(1)
        : cleanPath.slice(1, nestedLevel + 2);

    // search for the path whose router element doesn't exist in the DOM
    const searchPathArr = pathArr.splice(routeElementsLen);

    // route for which we have to render its route element
    let nextPath =
      routeElementsLen > 0
        ? `/${pathArr.splice(0, routeElementsLen).join('/')}`
        : '';
    const fragment = document.createDocumentFragment();

    for (const [index, path] of searchPathArr.entries()) {
      const renderEleFragment = [
        ...fragment.querySelectorAll('[data-vanilla-route-ele="router-wrap"]'),
      ];
      const routeFragmentEle =
        index === 0 ? fragment : renderEleFragment[index - 1];

      const routeInfo = this.#getRoute(`${nextPath}/${path}`);
      nextPath += `/${path}`;
      if (routeInfo.pathname === '*') {
        routeFragmentEle?.appendChild(this.#routes['*']!.element());
        break;
      } else {
        routeFragmentEle?.appendChild(routeInfo.element());
      }
    }

    const routeEle = renderRouteEle[routeElementsLen]; //  route element in which subRoute element will be rendered
    if (routeEle) {
      routeEle.innerHTML = '';
      routeEle.appendChild(fragment);
    }
  }

  #updateHistory({
    addToHistory,
    replaceState,
    state,
    pathname,
  }: PushHistory & {
    pathname: string;
    replaceState?: boolean;
  }) {
    if (replaceState) {
      history.replaceState(state, '', pathname);
    } else if (addToHistory) {
      history.pushState({ ...state, pathname }, '', pathname);
    }
  }

  #unMount() {
    const { pathname: closingRoutePath } = this.getLocation();
    this.#disposeCb[closingRoutePath]?.();
    delete this.#disposeCb[closingRoutePath];
  }

  #isNotSameRoute(searchPathname: string) {
    const { pathname: closingRoutePath } = this.getLocation();
    return closingRoutePath === '/' || closingRoutePath !== searchPathname;
  }

  #routePath(pathname: string) {
    if (this.routeType === HashRouteType) {
      return pathname.slice(2);
    }
    return pathname;
  }

  #push(searchPathname: string, options?: PushHistory, replaceState = false) {
    const routePath = this.#routePath(searchPathname);
    if (this.#isNotSameRoute(routePath)) {
      const { state = {}, addToHistory = true } = options ?? {};
      const routeData = this.#getRoute(routePath);
      const { params, search, hash, pathname, nestedLevel } = routeData;

      this.#unMount();

      this.#setLocation({ pathname: routePath, params, search, hash });

      this.#updateHistory({
        addToHistory,
        replaceState,
        state,
        pathname: searchPathname,
      });

      const routeRenderEle = [
        ...document.querySelectorAll('[data-vanilla-route-ele="router-wrap"]'),
      ];

      // direct accessing the route
      if (routeRenderEle.length - 1 >= nestedLevel && pathname !== '*') {
        this.#directRoute(routeRenderEle, routeData);
      }
      // route by route access to the nested route
      else {
        this.#directNestedRoute(routePath, routeData);
      }

      // on route change, page should start from the top
      window.scrollTo(0, 0);
    }
  }

  // route change
  go(searchPathname: string, options?: PushHistory) {
    if (this.routeType === HashRouteType && !searchPathname.startsWith('/#')) {
      searchPathname = `/#` + searchPathname;
    }

    this.#push(searchPathname, options);
  }

  dispose<T extends () => void>(cb: T) {
    if (cb) {
      const { pathname } = this.getLocation();
      this.#disposeCb[pathname] = cb;
    }
  }

  #setLocation(obj: RouteLocation) {
    this.#location = obj;
  }
  getLocation() {
    return this.#location;
  }

  back() {
    window.history.back();
  }
  forward() {
    window.history.forward();
  }
  refresh() {
    window.location.reload();
  }
  replace(searchPathname: string, state?: PushHistory['state']) {
    let pathname = searchPathname;
    if (this.routeType === HashRouteType) {
      pathname = `/#${searchPathname}`;
    }
    this.#push(pathname, { state, addToHistory: false }, true);
  }

  #routeConfig(
    routeData: Routes[],
    basePath = '',
    nestedLevel = DefaultNestedLevel
  ) {
    routeData.forEach(routeInfo => {
      const pathname = `${basePath}${routeInfo.pathname}`;
      const paramsKey = this.#splitPath(pathname.replaceAll(':', ''));
      this.#routes[pathname] = {
        element: routeInfo.element,
        params:
          pathname.indexOf(':') >= 0 ? this.#setParamsKeys(paramsKey) : {},
        isSubRoute: Boolean(basePath),
        nestedLevel,
      };
      if (routeInfo.children) {
        this.#routeConfig(routeInfo.children, pathname, nestedLevel + 1);
      }
    });
  }

  // route config
  config(routeData: Routes[], basePath = '') {
    this.#routeConfig(routeData, basePath);
  }
}

class RouterSetup extends RouterManagement {
  #routeSetup: boolean = false;

  // initialize the router
  #init(routeType: RouteType, routeData: Routes[]) {
    this.routeType = routeType;
    this.#checkRouteSetup();
    this.config(routeData);
    this.#backListener();
    this.#addListener();
  }

  // take the user on the previous route on using the the browser back functionality
  #backListener() {
    window.addEventListener('popstate', (event: PopStateEvent) => {
      const { pathname = '' } = event.state || {};
      if (pathname) {
        this.go(pathname as string, { state: {}, addToHistory: false });
      }
    });
  }

  #addListener() {
    const links = document.querySelectorAll('a[data-vanilla-route-link="spa"]');
    if (links) {
      links.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const href = (event.target as Element).getAttribute('href') ?? '';
          this.go(href);
        });
      });
    }
  }

  #checkRouteSetup() {
    if (this.#routeSetup) {
      this.go('/404');
      throw new Error(
        'In the application you can only have 1 Route setup using either browserRoute() or hashRoute().'
      );
    }
    this.#routeSetup = true;
  }

  #appendHash() {
    const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
      'a[data-vanilla-route-link="spa"]'
    );
    if (links) {
      links.forEach(link => {
        const pathname = link.href.slice(link.origin.length);
        link.href = `/#${pathname}`;
      });
    }
  }

  // initial browser route
  browserRoute(routeData: Routes[]) {
    const { origin, href } = new URL(window.location.href);
    this.#init(BrowserRouteType, routeData);
    const pathname = href.slice(origin.length);
    // Should render route html after the this.#routes is set.
    this.go(pathname);
  }

  // initial hash route
  hashRoute(routeData: Routes[]) {
    const { origin, href } = new URL(window.location.href);
    this.#init(HashRouteType, routeData);
    let pathname = href.slice(origin.length);
    this.#appendHash();
    if (!pathname.startsWith('/#')) {
      pathname = `/#${pathname}`;
      window.location.href = `${origin}${pathname}`;
    }
    // Should render route html after the this.#routes is set.
    this.go(pathname);
  }
}

const Router = new RouterSetup();

const BrowserRoute = (routes: Routes[]) => Router.browserRoute(routes);

const HashRoute = (routes: Routes[]) => Router.hashRoute(routes);

const routeLocation = () => Router.getLocation();

const router = () => Router.getRoutes();

export { BrowserRoute, HashRoute, routeLocation, Router, router };
