define([
'backbone'
], function(Backbone) {

var ArticleModel = Backbone.Model.extend({
    urlRoot: '/articles',
    defaults: {
        title: 'Article Title',
        body: 'Article body.',
        author: 'Anonymous',
        category: 'Stories',
        dateCreated: '',
        dateLastModified: ''
    }
});
// Return the model for the module
return ArticleModel;
});
