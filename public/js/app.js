'use strict';

requirejs.config({
    paths: {
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
        "jquery.bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min",
        "backbone": "/components/backbone-min",
        "underscore": "/components/underscore-min",
        "dust": "/components/dustjs-linkedin/dist/dust-full-2.0.3",
        "typeahead": "https://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle",
        "xing_wysi_parser_rules": "/components/xing-wysihtml5/parser_rules/advanced",
        "xing_wysi_dist": "/components/xing-wysihtml5/dist/wysihtml5-0.3.0.min",
        "views/case": "/views/case",
        "views/stories": "/views/stories",
        "views/reviews": "/views/reviews",
        "views/home": "/views/home",
        "views/newArticle": "/views/newArticle",
        "views/article": "/views/article",
        "models/article": "/models/article",
        "models/articleCollection": "/models/articleCollection",
        "views/contact" : "/views/contact",
        "views/articleList" : "/views/articleList",
        "views/friends" : "/views/friends"

    },
    shim: {
        "jQuery": {
            exports: '$'
        },
        "jquery.bootstrap": {
            deps: ["jquery"]
        },
        "typeahead": {
            deps: ["jquery"]
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "underscore": {
            exports: '_'
        }, 
        "models/articleCollection": {
             deps: ["models/article"]
        },
        "views/articleList" : {
            deps: ["models/articleCollection"]
        }
    }
});

require(["jquery", "backbone", "underscore", "jquery.bootstrap", "typeahead", "xing_wysi_dist", "xing_wysi_parser_rules", "dust",
        "views/case",
        "views/stories",
        "views/reviews",
        "views/home",
        "views/newArticle",
        "views/article",
        "models/article",
        "models/articleCollection",
        "views/contact",
        "views/articleList",
        "views/friends",
    ],
    function($, Backbone, _, bootstrap, Typeahead, WYSI_dist, 
        WYSI_Parser, Dust, 
        CaseView, 
        StoriesView, 
        ReviewsView, 
        HomeView, 
        NewArticleView, 
        ArticleView, 
        ArticleModel, 
        ArticleCollection, 
        ContactView,
        ArticleList,
        FriendsView) {

        var AppRouter = Backbone.Router.extend({
            routes: {
                // Default
                "": "homeAction",
                "newArticle": "newArticleAction",
                "articles/:id": "openArticleIdAction",
                "articles/category/:categoryName": "openArticleByCategory",
                "articles/category/:categoryName/:pageNumber": "openArticlePageByCategory",
                "contact": "contactAction",
                "friends" : "friendsAction"

            },
            homeAction: function() {
                var homeView = new HomeView();
                homeView.render();
            },
            openArticleByCategory: function(categoryName) {
                if (this.articleList) this.articleList.close();
                this.articleList = new ArticleList({model: {category : categoryName}});
                this.articleList.render();
            },           
            openArticlePageByCategory: function(categoryName, pageNumber) {

                var articles = new ArticleCollection([], {
                    category: categoryName,
                    pageNumber: pageNumber

                });
                articles.fetch({
                    success: function(articles) {
                        var articleList = new ArticleList({model: {articles: articles.toJSON(), category : categoryName}});
                        articleList.render();
                    }
                })                
            },
            newArticleAction: function() {
                console.log("new article")
                if (this.newArticleView) this.newArticleView.close();
                this.newArticleView = new NewArticleView();
                this.newArticleView.render();
            },
            openArticleIdAction: function(id) {

                var that = this;
                var article = new ArticleModel({
                    id: id
                });
                article.fetch({
                    success: function(article) {
                        if (that.articleView) that.articleView.close();
                        that.articleView = new ArticleView({
                            model: article.toJSON()
                        });
                        that.articleView.render();
                    }
                })

            },
            contactAction : function() {
                if (this.contactView) this.contactView.close();
                this.contactView = new ContactView();
                this.contactView.render();
            },
            friendsAction : function() {
                if (this.friendsView) this.friendsView.close();
                this.friendsView = new FriendsView();
                this.friendsView.render();
            }
        });

        var app = {
            initialize: function() {
                var router = new AppRouter();
                Backbone.history.start();

                $('.affixed').affix({

                });


            }
        };

        app.initialize();

    });
