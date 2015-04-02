import Ember from 'ember';

export default Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		editNote: function(){
			this.set("isEditing", true);
		},
		saveNewNote: function(){
			this.set("isEditing", false);
			if(!(this.get("model.copy"))) {
				this.send("deleteNote");
			} 
			else {
				this.get("model").save();
			}
		},
		deleteNote: function(){
			this.get("model").deleteRecord();
			this.get("model").save();

		}
	}
});
