'use strict';


module.exports = function(router) {

    var articlePageLimit = 10;

    router.get('/:id', function(req, res) {

        var ent_article = req.seneca.make$("article");
        ent_article.load$(req.params.id, function(err, article) {

            if (err) {
                console.log("error");
                return console.log(err);
            }
            res.format({
                json: function() {
                    res.json(article);
                }
            });
        })

    });
    router.get('/category/:categoryName', function(req, res) {
        getArticles(req.seneca, req.params.categoryName, 0, function(err, articles) {
            res.format({
                json: function() {
                    res.json(articles);
                }
            });
        });
    });
    router.get('/category/:categoryName/:pageNumber', function(req, res) {

        getArticles(req.seneca, req.params.categoryName, req.params.pageNumber, function(err, articles) {
            res.format({
                json: function() {
                    res.json(articles);
                }
            });
        });
    });
    router.post('/', function(req, res) {

        var model = req.body;
        model.dateCreated = new Date();
        model.dateLastModified = new Date();
        var articleModel = req.seneca.make$('article', model);
        articleModel.save$(function(err, article) {
            if (err) return console.log("Error saving" + err);

            res.format({
                json: function() {
                    res.json({
                        id: article.id
                    });
                }
            });
        });


    });

    function getArticles(seneca, categoryName, page, callback) {
        
        var ent_article = seneca.make$("article");
        
        var params = {
            limit$: articlePageLimit,
            skip$: page * articlePageLimit,
            sort$:{dateCreated:-1}
        };

        //if filter is all then don't add this as a param
        if(categoryName  != "all"){
            params.category = categoryName;
        }

        ent_article.list$(params, function(err, articles) {
            return callback(err, articles);
        });
    }
};
