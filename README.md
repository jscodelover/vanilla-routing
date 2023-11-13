# Vanilla Router DOM

The Vanilla Router DOM stands out as a lightweight and versatile routing solution designed for vanilla JavaScript web applications. This router seamlessly handles both browser-based and hash-based routing, empowering developers to effortlessly navigate and manage various views within their applications without the need for complete application reloads. As a dedicated Single Page Application (SPA) router tailored for Vanilla JS enthusiasts, it provides a streamlined approach to enhancing user experience and application flow.

## Installation

To install the Vanilla Router DOM, you can use npm or yarn:

```bash
npm install vanilla-router-dom
```

or

```bash
yarn add vanilla-router-dom
```

## Getting Started

To get started with the Vanilla Router DOM, you can use either `BrowserRoute` and `HashRoute` functions to initialize the routing configuration with the desired routes.

Here's a simple example:

### `<BrowserRoute>`

It is a router implementation that uses the HTML5 history API(pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.

```javascript
import { BrowserRoute } from 'vanilla-router-dom';

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
import { HashRoute } from 'vanilla-router-dom';

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

To render the content of the routes, the `data-vanilla-route-ele` attribute with the value `router-wrap`. This attribute is added to the HTML element where the content of the route should be rendered.

```html
<section data-vanilla-route-ele="router-wrap">
  <!-- Content of the routes will be rendered here -->
</section>
```

By using the `data-vanilla-route-ele` attribute, you can easily define the target elements for rendering the content of the routes, allowing for a flexible and organized approach to managing complex page layouts and content.

## Nested Routes

In the Vanilla Router DOM, you can easily configure nested routes to create a hierarchical structure for your web application. Nested routes allow you to define parent routes with child routes, enabling you to manage and render complex page layouts and content.

## Example Configuration

```javascript
import { Router, routeLocation } from 'vanilla-router-dom';

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

#### BrowserRoute

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

##### `go(searchPathname: string, options?: PushHistory)`

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
      pathname: '/',  /* route path */
      element: () =>  {}, /* element to be rendered */
      children: [] /* (Optional) nested routes
    }
    ```
  - `basePath` (optional): A string representing the base path for the routes.

##### `dispose(cb: () => void)`

The `dispose` method is used to register a callback function to be executed when the current route is unmounted.

- Parameters:
  - `cb`: A callback function to be executed when the current route is unmounted.

## Advanced Topics

The Vanilla Router DOM supports advanced features such as route disposal, route setup validation, and event listeners for route navigation.

## Examples and Tutorials

For real-world examples on using the Vanilla Router DOM, please visit the [GitHub repository](https://github.com/jscodelover/vanilla-router-dom/tree/main/example)

## Contributing and Support

If you'd like to contribute to the Vanilla Router DOM or report any issues, please visit the [GitHub repository](https://github.com/jscodelover/vanilla-router-dom) for the library.

## License

Released under the [MIT](https://raw.githubusercontent.com/jscodelover/vanilla-router-dom/main/LICENSE) license

Copyright (c) 2023 Manisha Basra
