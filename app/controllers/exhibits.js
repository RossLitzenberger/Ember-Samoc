import Ember from 'ember';

export default Ember.ArrayController.extend({
	totalExhibits: function(){
		return this.get("model.length");
	}.property("@each")
});
