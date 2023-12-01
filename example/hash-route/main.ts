import { HashRoute } from 'vanilla-routing';
import { routeConfig } from '../common/routeConfig';

document.addEventListener('DOMContentLoaded', () => {
  HashRoute(routeConfig);
});
