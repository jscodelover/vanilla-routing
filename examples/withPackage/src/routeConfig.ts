import { Router, routeLocation } from 'vanilla-routing';
import type { Routes } from 'vanilla-routing';

const learnJsRoute: Routes[] = [
  {
    pathname: '/library-creation',
    element: () => {
      console.log('/library-creation', routeLocation());
      const ele = document.createElement('h4');
      ele.innerText = 'Learning JS library creation';
      return ele;
    },
  },
  {
    pathname: '/library-publishing',
    element: () => {
      console.log('/library-publishing', routeLocation());
      const ele = document.createElement('h4');
      ele.innerText = 'Learning JS library publishing';
      return ele;
    },
  },
];

const learnRoutes: Routes[] = [
  {
    pathname: '/js',
    element: () => {
      console.log('/js', routeLocation());
      const fragment = document.createDocumentFragment();
      const ele = document.createElement('h3');
      ele.innerText = 'Learning JS';
      fragment.appendChild(ele);
      const section = document.createElement('section');
      section.setAttribute('data-vanilla-route-ele', 'router-wrap');
      fragment.appendChild(section);
      return fragment;
    },
    children: learnJsRoute,
  },
  {
    pathname: '/css',
    element: () => {
      console.log('/css', routeLocation());
      const ele = document.createElement('h3');
      Router.dispose(() => {
        console.log('Bye Bye from CSS Page');
      });
      ele.innerText = 'Learning CSS';
      return ele;
    },
  },
];

export const routeConfig: Routes[] = [
  {
    pathname: '/',
    element: () => {
      console.log('/', routeLocation());
      const ele = document.createElement('h2');
      ele.innerText = 'HOME PAGE';
      return ele;
    },
  },
  {
    pathname: '/about',
    element: () => {
      console.log('/about', routeLocation());
      const ele = document.createElement('h2');
      ele.innerText = 'ABOUT PAGE';
      const btn = document.createElement('button');
      btn.innerText = 'Take me to the About page with details';
      btn.onclick = () => {
        Router.go('/about/manisha');
      };
      ele.appendChild(btn);
      Router.dispose(() => {
        console.log('Bye Bye from About Page');
      });
      return ele;
    },
  },
  {
    pathname: '/about/:id',
    element: () => {
      console.log('/about/:id', routeLocation());
      const ele = document.createElement('h2');
      ele.innerText = `ABOUT PAGE with details about ${
        routeLocation().params.id
      }`;
      const btnBack = document.createElement('button');
      btnBack.innerText = 'Go back';
      btnBack.onclick = () => {
        Router.back();
      };
      const btnForward = document.createElement('button');
      btnForward.innerText = 'Go Forward';
      btnForward.onclick = () => {
        Router.forward();
      };

      ele.appendChild(btnBack);
      ele.appendChild(btnForward);
      return ele;
    },
  },
  {
    pathname: '/learn',
    element: () => {
      console.log('/learn', routeLocation());
      const fragment = document.createDocumentFragment();
      const ele = document.createElement('h3');
      ele.innerText = 'LEARN PAGE';
      fragment.appendChild(ele);
      const btn = document.createElement('button');
      btn.innerText = 'Replace with css page';
      btn.onclick = () => {
        Router.replace('/learn/css');
      };
      fragment.appendChild(btn);
      const section = document.createElement('section');
      section.setAttribute('data-vanilla-route-ele', 'router-wrap');
      fragment.appendChild(section);
      return fragment;
    },
    children: learnRoutes,
  },
  {
    pathname: '*',
    element: () => {
      console.log('*', routeLocation());
      const ele = document.createElement('h3');
      ele.innerText = '404 Page not found';
      return ele;
    },
  },
];
