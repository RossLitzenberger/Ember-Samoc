import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return exhibits.findBy("id", params.exhibit_id);
	}
});
