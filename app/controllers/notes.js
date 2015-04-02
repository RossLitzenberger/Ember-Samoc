import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		newNote: function() {
			var copy = this.get("noteText");
			if(!copy){
				return false;
			}
			var note = this.store.createRecord("note", {
				copy: copy
			});
			this.set("noteText", "");
			note.save();
		}
	}
});
