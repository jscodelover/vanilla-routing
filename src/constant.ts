export const BrowserRouteType = 'BrowserRoute';
export const HashRouteType = 'HashRoute';
export const DefaultNestedLevel = 0;
export const _404RRoute = {
  element: () => {
    throw new Error('Page not found');
  },
  params: {},
  isSubRoute: false,
  nestedLevel: DefaultNestedLevel,
};
