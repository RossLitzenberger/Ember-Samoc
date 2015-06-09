import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("about");
  this.route("collections");
  this.resource("exhibits", function(){
    this.resource("exhibit", { path: "/:exhibit_id"} );
  });
  this.resource("notes", function(){
    this.resource("note", {path: "/:note_id"} );
  });
  this.route('notes');
});


export default Router;
