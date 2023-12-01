import { BrowserRoute } from 'vanilla-routing';
import { routeConfig } from '../common/routeConfig';

document.addEventListener('DOMContentLoaded', () => {
  BrowserRoute(routeConfig);
});
