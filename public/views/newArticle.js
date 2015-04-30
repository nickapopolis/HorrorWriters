// Filename: views/project/list
define([
    'jquery',
    'dust',
    'backbone',
    "models/article"
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    //'text!templates/project/list.html'
], function($, Dust, Backbone, ArticleModel) {

    function loadSource(filePath, callback) {
        //template already exists
        if(filePath in dust.cache) return callback(filePath);

        //template does not exist so compile it
        $.get(filePath, function(template) {
            var compiled = dust.compile(template, filePath);
            dust.loadSource(compiled);
            return callback(filePath);
        });
    }

    var NewArticleView = Backbone.View.extend({
        el: $('#main-content'),
        render: function() {

            var that = this;

            loadSource('/templates/layouts/tools/richTextEditor.dust', function() {
                loadSource('/templates/layouts/articleCreator.dust', function(templateName) {
                    dust.render(templateName, {}, function(err, out) {
                        if (err) console.log(err);
                        else {
                            that.$el.html(out);
                            var editor = new wysihtml5.Editor("articleBody", { // id of textarea element
                                toolbar: "toolbar", // id of toolbar element
                                stylesheets: ["/css/wysi-editor.css"],
                                parserRules: wysihtml5ParserRules // defined in parser rules set 
                            });
                        }
                    });
                });
            });
        },
        events: {
            'click #articleSubmitButton': "submitArticle"
        },
        submitArticle: function(e) {
            var articleData = {
                title: $("#articleTitle").val(),
                body: $("#articleBody").val(),
                category: $("#articleCategory").val()
            };
            var article = new ArticleModel();
            article.save(articleData, {
                success: function(model, response) {
                    console.log(article.toJSON());
                    window.location.href = "/#articles/" + article.id;
                }
            });
        },
        close: function() {
            $(this.el).unbind();
            $(this.el).empty();
        }
    });
    // Our module now returns our view
    return NewArticleView;
});
