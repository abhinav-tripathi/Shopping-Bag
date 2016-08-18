/*
 * This file is main entry point of app
 * @project   Shopping Bag
 * @date      2016-08-11
 * @author    Abhinav Tripathi
 @dependency  node server, npm (express, nunjucks) and custom module (config.js, boot.js)
 */


'use strict';

// Setup the environment variable and static folder
var config = require('./config/config'),

    //Boot up file to set up template engine and static folder with express
    boot = require('./app/boot'),
    express = require('express'),
    nunjucks  = require('nunjucks');


var app = boot(config, nunjucks, express);


app.listen(config.port, function () {
    console.log('app listening on port '+config.port);
});