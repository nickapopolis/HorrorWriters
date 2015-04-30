// Filename: views/project/list
define([
    'jquery',
    'dust',
    'backbone',
    'models/articleCollection'
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    //'text!templates/project/list.html'
], function($, _, Backbone, ArticleCollection) {

    function loadSource(filePath, callback) {
        //template already exists
        if (filePath in dust.cache) return callback(filePath);

        //template does not exist so compile it
        $.get(filePath, function(template) {
            var compiled = dust.compile(template, filePath);
            dust.loadSource(compiled);
            return callback(filePath);
        });
    }

    function renderList(selector, context, callback) {
        loadSource('/templates/layouts/articleList.dust', function(listTemplateName) {
            dust.render(listTemplateName, context, function(err, out) {
                if (err) console.log(err);
                else {
                    selector.html(out);
                    return callback();
                };
            });
        });
    }

    function renderListItems(selector, context, callback) {
        loadSource('/templates/layouts/articleListItem.dust', function(listItemTemplateName) {
            dust.render(listItemTemplateName, context, function(err, out) {
                if (err) console.log(err);
                else {
                    selector.append(out);
                    return callback();
                }
            });
        });
    }

    var ArticleList = Backbone.View.extend({
        el: $('#main-content'),

        initialize: function() {
            var that = this;
            that.articleCollection = new ArticleCollection([], {
                category: this.model.category
            });
            $(window).scroll(function() {
                if ($('#articleList').length > 0 && ($(window).scrollTop() + $(window).height() == $(document).height())) {
                    that.loadMoreResults();
                }
            });
        },
        loadMoreResults: function() {
            var that = this;
            this.articleCollection.fetch({
                success: function(articles) {
                    renderListItems($('#articleList'), {
                        articles: articles.toJSON()
                    }, function() {
                        that.articleCollection.pageNumber += 1;
                    });
                }
            })
        },
        render: function() {
            var that = this;
            renderList(that.$el, {
                category: that.model.category
            }, function() {
                that.loadMoreResults();
            });
        },
        events: {
            'click #articleLoadMoreButton': "loadMoreResults"
        },
        close: function() {
            $(this.el).unbind();
            $(this.el).empty();
            $(window).unbind('scroll');
        }
    });


    // Our module now returns our view
    return ArticleList;
});
