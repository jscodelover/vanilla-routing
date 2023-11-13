import { routeConfig } from './routeConfig';
import { BrowserRoute, HashRoute } from '../src/index';

document.addEventListener('DOMContentLoaded', () => {
  HashRoute(routeConfig);
});
