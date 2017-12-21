import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('the-monkees');
  this.route('live-shows');
  this.route('contact-us', function() {
     this.route('autocomplete');
  });
  this.route('our-music');
});

export default Router;
