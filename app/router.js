import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("about");
    this.route("collections");
    this.resource("exhibits");
    this.route("notes");
});

export default Router;
