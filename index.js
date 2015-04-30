'use strict';


var kraken = require('kraken-js'),
    app = require('express')(),
    seneca = require('seneca')(),
    options = {
        onconfig: function(config, next) {
            //any config setup/overrides here
            next(null, config);
        }
    },
    port = process.env.PORT || 8000;



app.use(kraken(options));

// enable the /mem-store/dump HTTP end point
// this lets you see the entire contents of the database as a JSON object
// in the browser - very useful for debugging!
// Go to http://localhost:3333/mem-store/dump to debug db contents
seneca.use('mem-store', {
    web: {
        dump: true
    }
});

// expose our controllers to seneca
// the seneca.export('web') method returns a single function with the signature
// function(req,res,next) that can be used with connect or express
// this service method wraps up all the plugin HTTP endpoints
// seneca includes the connect utility plugin by default, which
// sets the special arguments req$ and res$ on all seneca calls, allowing
// seneca actions to access the current HTTP req and res objects 
app.use(seneca.export('web'))


app.listen(port, function(err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
