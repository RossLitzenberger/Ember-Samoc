import Ember from 'ember';

export default Ember.ObjectController.extend({
	exhibitsTitle: function() {
		return this.get("title") + " by " + this.get("artist_name");
	}.property("artist_name", "title")
});
