define([
    'underscore',
    'backbone',
    'models/article'
], function(_, Backbone, ArticleModel) {
    var ArticleCollection = Backbone.Collection.extend({
        model: ArticleModel,
        pageNumber: 0,
        category: "",

        initialize: function(models, options) {
            console.log(options);
            this.category = options.category;
            if(options.pageNumber){
                this.pageNumber = options.pageNumber;
            }
        },
        url: function(){
             return "/articles/category/" + this.category + "/" + this.pageNumber;
        }
        

    });
    // Return the model for the module
    return ArticleCollection;
});
