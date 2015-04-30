define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var IndexModel = Backbone.Model.extend({
    defaults: {
      categories: [
		{"Reviews": [
			"Book Reviews",
			"Movie Reviews",
			"Game Reviews",
			"Television",
			"LGBTQ",
			"Music"
		]},
		{"Articles":[
			"The Republic Of Shawntario",
			"Renfield's Resurrection",
			"Lisa's Love Letters",
			"Into The Darkness",
			"Bryan's Basement",
			"What Comes Next",
			"The Waiting Room"
		]},
		"Guest Articles",
		"Interviews",
		"Stories",
		"Our Family",
		"Sacrament",
		"Contact"
	]
    }
  });
  // Return the model for the module
  return IndexModel;
});

