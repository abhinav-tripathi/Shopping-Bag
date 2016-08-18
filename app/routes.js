/*
 * This file is to define the routes for app
 * @project   Shopping Bag
 * @date      2016-08-11
 * @author    Abhinav Tripathi
 @dependency  cart-controller.js
 */
'use strict';

module.exports = function(app) {

    //Controller
    var cart = require('./cart/cart-controller');

    //Routes
    app.get('/', cart.render());
    app.get('/product-details/:pid', cart.getProductDetails());
    app.put('/update-cart', cart.updateCartItem());
};