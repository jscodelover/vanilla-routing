<!-- [![Coverage Status](https://coveralls.io/repos/github/jscodelover/vanilla-routing/badge.svg?branch=main)](https://coveralls.io/github/jscodelover/vanilla-routing?branch=main) -->

# Vanilla Routing

[![npm](https://badgen.net/npm/v/vanilla-routing)](https://www.npmjs.com/package/vanilla-routing)
[![npm](https://badgen.net/npm/dm/vanilla-routing)](https://www.npmjs.com/package/vanilla-routing)
[![License](https://badgen.net/github/license/jscodelover/vanilla-routing)](https://raw.githubusercontent.com/jscodelover/vanilla-routing/main/LICENSE)

[![NPM](https://nodei.co/npm/vanilla-routing.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vanilla-routing/)

[![NPM](https://nodei.co/npm-dl/vanilla-routing.png?months=1&height=3)](https://nodei.co/npm/vanilla-routing/)

## Description

The Vanilla Routing stands out as a lightweight and versatile routing solution designed for vanilla JavaScript web applications. This router seamlessly handles both browser-based and hash-based routing, empowering developers to effortlessly navigate and manage various views within their applications without the need for complete application reloads. As a dedicated Single Page Application (SPA) router tailored for Vanilla JS enthusiasts, it provides a streamlined approach to enhancing user experience and application flow.

Vanilla Router for client side routing, inspired by React Router.

### [Live Example](https://codesandbox.io/p/devbox/autumn-frog-xhyzzs?file=%2Fserver.cjs%3A7%2C7&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpcv0gcc00083b6h97vyjlz2%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpcv0gcc00033b6hbtop07qd%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpcv0gcc00053b6hr1nd2aqi%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpcv0gcc00073b6hlsd5vfmr%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpcv0gcc00033b6hbtop07qd%2522%253A%257B%2522id%2522%253A%2522clpcv0gcc00033b6hbtop07qd%2522%252C%2522activeTabId%2522%253A%2522clpgtnm2j00033b6hoh7yet3x%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clpgtdwmy03183b6h9xv2ete1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A24%252C%2522startColumn%2522%253A1%252C%2522endLineNumber%2522%253A24%252C%2522endColumn%2522%253A1%257D%255D%257D%252C%257B%2522id%2522%253A%2522clpgtnm2j00033b6hoh7yet3x%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A7%252C%2522startColumn%2522%253A7%252C%2522endLineNumber%2522%253A7%252C%2522endColumn%2522%253A7%257D%255D%252C%2522filepath%2522%253A%2522%252Fserver.cjs%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clpcv0gcc00073b6hlsd5vfmr%2522%253A%257B%2522id%2522%253A%2522clpcv0gcc00073b6hlsd5vfmr%2522%252C%2522activeTabId%2522%253A%2522clpgtuidy01cp3b6h5kuwmsdk%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522port%2522%253A3000%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clpgtuidy01cp3b6h5kuwmsdk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clpcv0gcc00053b6hr1nd2aqi%2522%253A%257B%2522id%2522%253A%2522clpcv0gcc00053b6hr1nd2aqi%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpcv0gcc00043b6hpjdqb6r3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpcv0gcc00043b6hpjdqb6r3%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

### [Example Repo](https://github.com/jscodelover/vanilla-routing/tree/main/example)

## Installation

To install the Vanilla Routing, you can use npm or yarn:

```bash
npm install vanilla-routing
```

or

```bash
yarn add vanilla-routing
```

## Getting Started

To get started with the Vanilla Routing, you can use either `BrowserRoute` and `HashRoute` functions to initialize the routing configuration with the desired routes.

Here's a simple example:

### `<BrowserRoute>`

It is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.

```javascript
import { BrowserRoute } from 'vanilla-routing';

// Define your routes here
const routes = [
  {
    pathname: '/',
    element: () => document.createElement('div') {/* 👈 Renders at / */}
  },
  {
    pathname: '/post',
    element: () => document.createElement('div') {/* 👈 Renders at /post */}
  },
];

BrowserRoute(routes); // Initialize browser-based routing
```

### `<HashRoute>`

It is for use in web browsers when the URL cannot be sent to the server for some reason. `<HashRouter>` makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.

```javascript
import { HashRoute } from 'vanilla-routing';

// Define your routes here
const routes = [
  {
    pathname: '/',
    element: () => document.createElement('div')  {/* 👈 Renders at /#/ */}
  },
  {
    pathname: '/post',
    element: () => document.createElement('div') {/* 👈 Renders at /#/post/ */}
  },
];

HashRoute(routes); // Initialize hash-based routing
```

## Rendering Routes

To render the content of the routes, use the `data-vanilla-route-ele` attribute with the value `router-wrap`. This attribute is added to the HTML element where the content of the route should be rendered.

```html
<section data-vanilla-route-ele="router-wrap">
  <!-- Content of the routes will be rendered here -->
</section>
```

By using the `data-vanilla-route-ele` attribute, you can easily define the target elements for rendering the content of the routes, allowing for a flexible and organized approach to managing complex page layouts and content.

## Link

To create a link tag that navigate to the different route without reloading the page you've to add `data-vanilla-route-link` attribute with the value `spa` to the anchor tag.

```html
<a data-vanilla-route-link="spa" href="/">
  <!-- Home Page Link -->
</a>
<a data-vanilla-route-link="spa" href="/">
  <!-- About Page Link -->
</a>
```

## Nested Routes

In the Vanilla Routing, you can easily configure nested routes to create a hierarchical structure for your web application. Nested routes allow you to define parent routes with child routes, enabling you to manage and render complex page layouts and content.

## Example Configuration

```javascript
import { Router, routeLocation } from 'vanilla-routing';

// Define the main route configuration
export const routeConfig= [
  {
    pathname: '/',
    element: () =>  {},
  },
  {
    pathname: '/learn',
    element: () =>  {},
    children: [
      {
        pathname: '/js',  /* /learn/js */
        element: () => {},
        children: [
          {
            pathname: '/library-creation', /* /learn/js/library-creation */
            element: () => {},
          },
        ];
      },
      {
        pathname: '/css',
        element: () => {},
    },
    ]
  },
];
```

The `children` property is used to specify the nested routes within the parent route.

### 404 Route

```javascript
  {
    pathname: '*',
    element: () =>  {},
  },
```

## API Reference

### BrowserRoute

The `BrowserRoute()` function initializes browser-based routing with the provided routes.

#### HashRoute

The `HashRoute()` function initializes hash-based routing with the provided routes.

#### routeLocation

The `routeLocation()` function returns the current route location which contain:

```javascript
{
  pathname: '/about/me?detail=true#all',
  params:{id:'me'},
  search: {details:true},
  hash: 'all'
}
```

#### router

The `router()` function returns the configured routes.

### <b>Router</b>

The `Router` class provides methods for managing routes, navigating, and configuring routing.

#### `go(searchPathname: string, options?: PushHistory)`

The `go` method is used to navigate to a new route based on the provided `searchPathname`. It also allows for additional options to be passed, such as `PushHistory` options and a boolean flag `replaceState` to indicate whether the navigation should replace the current history state.

- Parameters:
  - `searchPathname`: A string representing the pathname of the route to navigate to.
  - `options` (optional): An object containing additional options for the navigation, such as `addToHistory` and `state`.

##### `back()`

The `back` method is used to navigate to the previous page in the session history.

##### `forward()`

The `forward` method is used to navigate to the next page in the session history.

##### `replace(searchPathname: string, state?: PushHistory['state'])`

The `replace` method is used to replace the current route with a new route based on the provided `searchPathname`. It also allows for an optional `state` object to be passed for the history state.

- Parameters:
  - `searchPathname`: A string representing the pathname of the route to replace.
  - `state` (optional): An object representing the history state to replace.

##### `refresh()`

The `refresh` method is used to reload the current page.

##### `config(routeData, basePath = '')`

The `config` method is used to configure the routes for the application. It takes an array of `Routes` and optional parameter `basePath` to define the base path and nested level for the routes.

- Parameters:
  - `routeData`: An array of `Routes` representing the routes to be configured.
    ```javascript
    Routes = {
      pathname: '/' /* route path */,
      element: () => {} /* element to be rendered */,
      children: [] /* (Optional) nested routes */,
    };
    ```
  - `basePath` (optional): A string representing the base path for the routes.

##### `dispose(cb: () => void)`

The `dispose` method is used to register a callback function to be executed when the current route is unmounted.

- Parameters:
  - `cb`: A callback function to be executed when the current route is unmounted.

## Advanced Topics

The Vanilla Routing supports advanced features such as route disposal, route setup, and event listeners for route navigation.

## Contributing and Support

If you'd like to contribute to the Vanilla Routing or report any issues, please visit the [GitHub repository](https://github.com/jscodelover/vanilla-routing) for the library.

## License

Released under the [MIT](https://raw.githubusercontent.com/jscodelover/vanilla-routing/main/LICENSE) license

Copyright (c) 2023 Manisha Basra
