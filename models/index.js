'use strict';


module.exports = function IndexModel() {
	return {
		name: 'index',
		categories: [
		{
			dropdown: {
				title: "Reviews", 
				subCategories : [
				{name: "Book Reviews", link : "articles/category/bookReviews"},
				{name: "Movie Reviews", link : "articles/category/movieReviews"},
				{name: "Game Reviews", link : "articles/category/gameReviews"},
				{name: "Television", link : "articles/category/television"},
				{name: "LGBTQ", link : "articles/category/lgbtq"},
				{name: "Music", link : "articles/category/music"}]
			}
		},
		{
			dropdown: {
				title: "Articles",
				subCategories: [
				{name : "The Republic Of Shawntario", link : "articles/category/republicOfShawntario"},
				{name : "Renfield's Resurrection", link : "articles/category/renfieldsResurrection"},
				{name : "Lisa's Love Letters", link : "articles/category/lisasLoveLetters"},
				{name : "Into The Darkness", link : "articles/category/intoTheDarkness"},
				{name : "Bryan's Basement", link : "articles/category/bryansBasement"},
				{name : "What Comes Next", link : "articles/category/whatComesNext"},
				{name : "The Waiting Room", link : "articles/category/theWaitingRoom"}]
			}
		},
		{name: "Guest Articles", link: "articles/category/guestArticles"},
		{name: "Interviews", link: "articles/category/interviews"},
		{name: "Stories", link: "articles/category/stories"},
		{name: "Friends", link: "friends"},
		{name: "Contact", link: "contact"},
		{name: "Submit Article", link: "newArticle"}
		]
	}
};
