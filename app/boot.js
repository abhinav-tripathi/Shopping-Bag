/*
 * This file is boot file for app
 * @project   Shopping Bag
 * @date      2016-08-11
 * @author    Abhinav Tripathi
 @dependency  server.js,route.js
 */


'use strict';

module.exports = function(config, nunjucks, express) {
    var app = express();
    app.use(express.static(config.staticFolder));

    //Set up views path with template engine nunjucks
    var env = nunjucks.configure('app/views', {
        autoescape: true,
        express: app
    });

    //Passing the app object to route module
    require('./routes.js')(app);

    return app;
};