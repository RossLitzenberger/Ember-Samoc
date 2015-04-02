import DS from 'ember-data';

export default DS.Model.extend({
  copy: DS.attr('string')
}).reopenClass({
	FIXTURES: [
		{ 
			id: 1 ,
			copy: "This is a complete awesome!"
		}]
});
