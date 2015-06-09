import DS from 'ember-data';

var Exhibits = DS.Model.extend({
	  artist_name: DS.attr(),
	  title: DS.attr(),
	  exhibit_info: DS.attr(),
	  image: DS.attr()
}).reopenClass({
	FIXTURES: [
		{
			id: 1 ,
			artist_name:"Todd 'The' Great",
			title: "Though Full Art",
			exhibit_info: "When i was ",
			image: "image.jpg"
		},{
			id: 2 ,
			artist_name:"David Scott",
			title: "this",
			exhibit_info: "this",
			image: "image.jpg"
		},{
			id: 3 ,
			artist_name:"Ryan Free",
			title: "this",
			exhibit_info: "this",
			image: "image.jpg"
		}]
	});
export default Exhibits;
