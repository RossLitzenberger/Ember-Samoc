import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr()
}).reopenClass({
  FIXTURES: [
  	{
  		id: 1 ,
  		title: "Though Full Art",
  		content: "When i was ",
  	},{
  		id: 2 ,
  		title: "this",
  		content: "this",
  	},{
  		id: 3 ,
  		title: "this",
  		content: "this",
  	},{
  		id: 4 ,
  		title: "this",
  		content: "this",
  	}]
  });
