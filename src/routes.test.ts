import { test, describe, expect, vi, beforeAll } from 'vitest';
import { router, Router, routeLocation, BrowserRoute } from './routes';
import { DefaultRoute } from './constant';

const disposeMock = vi.fn();

const routes = [
  {
    pathname: '/',
    element: vi.fn(() => {
      const ele = document.createElement('h3');
      ele.innerText = 'HOME';
      return ele;
    }),
  },
  {
    pathname: '/dispose',
    element: vi.fn(() => {
      const ele = document.createElement('h3');
      ele.innerText = 'Dispose';
      Router.dispose(disposeMock);
      return ele;
    }),
  },

  {
    pathname: '/about',
    element: vi.fn(() => {
      const fragment = document.createDocumentFragment();
      const ele = document.createElement('h3');
      ele.innerText = 'About';
      fragment.appendChild(ele);
      const section = document.createElement('section');
      section.setAttribute('data-vanilla-route-ele', 'router-wrap');
      fragment.appendChild(section);
      return fragment;
    }),
    children: [
      {
        pathname: '/me',
        element: vi.fn(() => {
          const ele = document.createElement('h3');
          ele.innerText = 'me';
          return ele;
        }),
      },
    ],
  },
  {
    pathname: '/blog/:id',
    element: vi.fn(() => {
      const ele = document.createElement('h3');
      ele.innerText = 'Blog';
      return ele;
    }),
  },
];

describe('BrowserRoute', () => {
  // set the basic html
  beforeAll(() => {
    document.body.innerHTML = `<div>
      <main data-vanilla-route-ele="router-wrap"></main>
      <a data-vanilla-route-link="spa" href="/">Home</a>
    </div>`;
    BrowserRoute([...routes]);
    Router.go('/#hash');
  });

  test('getRoutes()', () => {
    expect(router()).toBe(DefaultRoute);
  });
  test('dispose()', () => {
    Router.go('/dispose');
    Router.go('/about/me');
    expect(disposeMock.mock.calls.length).toBe(1);
  });
  test('getLocation()', () => {
    Router.go('/about/me');
    expect(routeLocation()).toStrictEqual({
      pathname: '/about/me',
      params: {},
      search: {},
      hash: '',
    });
  });
});
