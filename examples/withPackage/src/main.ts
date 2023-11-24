import { BrowserRoute } from 'vanilla-routing';
import { routeConfig } from './routeConfig';

document.addEventListener('DOMContentLoaded', () => {
  BrowserRoute(routeConfig);
});
