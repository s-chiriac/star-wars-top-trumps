import EmberRouter from '@ember/routing/router';
import config from 'star-wars-top-trumps/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('starships');
  this.route('people');
});
