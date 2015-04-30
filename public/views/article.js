// Filename: views/project/list
define([
    'jquery',
    'dust',
    'backbone'
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    //'text!templates/project/list.html'
], function($, _, Backbone) {



    var ArticleView = Backbone.View.extend({
        el: $('#main-content'),
        render: function() {
            var that = this;

            $.get('/templates/layouts/article.dust', function(template) {
                var compiled = dust.compile(template, "article");
                dust.loadSource(compiled);
                dust.render("article", that.model, function(err, out) {
                    if (err) console.log(err);
                    else that.$el.html(out);
                });
            });


        },
        close: function() {
            $(this.el).unbind();
            $(this.el).empty();
        }
    });
    // Our module now returns our view
    return ArticleView;
});
