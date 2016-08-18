/*
 * This file cart related controller methods (Render cart data, Get product details, Update Cart)
 * @project   Shopping Bag
 * @date      2016-08-11
 * @author    Abhinav Tripathi
 @dependency  common.js
 */

'use strict';

var common = require('../common.js');

//Render cart data
module.exports.render = function() {
    var cartData = function(req, res) {
        var cartData = common.getCartData(),
            cartSubTotal = common.getCartPrice(cartData.productsInCart);
        res.render('cart.html',{'data':cartData.productsInCart,
            'subTotal':cartSubTotal.subTotal,
            'estimatedPrice':cartSubTotal.estimateAmtAndDiscount
        });
    };

    return cartData;
};

//product details api method call
module.exports.getProductDetails = function(){
    var productDetails = function(req, res){
        var cartData = common.getCartData(),
            productInfo = '';
        for(var i in cartData.productsInCart) {
            if(parseInt(cartData.productsInCart[i].p_id) == parseInt(req.params.pid)) {
                productInfo = cartData.productsInCart[i];
                break;
            }
        }
        res.render('product-details.html',{'data':productInfo});
    };

    return productDetails;
};

//Update cart
module.exports.updateCartItem = function(){
    var cartUpdate = function(req, res){
        var cartData = common.getCartData(),
            updatedCartData = common.updateCartData(cartData,req.query),
            cartSubTotal = common.getCartPrice(updatedCartData.productsInCart);
        res.render('cart-update.html',{'data':updatedCartData.productsInCart,
            'subTotal':cartSubTotal.subTotal,
            'estimatedPrice':cartSubTotal.estimateAmtAndDiscount
        });
    };

    return cartUpdate;
};