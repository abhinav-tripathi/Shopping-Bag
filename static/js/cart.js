/*
 * This file contains cart action (update cart and get product details)
 * @project   Shopping Bag
 * @date      2016-08-12
 * @author    Abhinav Tripathi
 @dependency jquery.min.js, modal.js
 * @ NOTE
 * This file containes methods to update the cart and get product details
 */

'use strict';

var cartAction = cartAction || {};
(function ($,cartAction) {

    //Get product details by product id
    cartAction.getProductDetails = function(productId){
        $.ajax({
            url: "/product-details/"+productId,
            method: 'GET'
        }).done(function(data) {
            $('.pd').html(data);
            $('.pd').modal('open');
        }).fail(function () {
            console.log('error');
        });
    };

    //Close modal box
    $('body').on('click', '.close' ,function () {
        $('.overlay').modal('close');
    });

    //Update cart
    cartAction.updateCart = function(pid,qty){
        var query = '?p_id='+pid+'&qty='+parseInt(qty);
        $.ajax({
            url: "/update-cart/"+query,
            method: 'PUT'
        }).done(function(data) {
            $('.sub-pages').html(data);
            $('.overlay').modal('close');
        }).fail(function () {
            console.log('error');
        });
    };

})(jQuery,cartAction);


//Edit click getting product details
$('body').on('click','.edit-item', function (event) {
    var productId = $(event.currentTarget.offsetParent).attr('product-id');
    cartAction.getProductDetails(productId);
});

//Update cart
$('body').on('click', '#update_cart' ,function (event) {
    event.preventDefault();
    var select = $('body').find('select.qty'),
        qty = $(select[1]).val(),
        pid = $(this).attr('product-id');
        cartAction.updateCart(pid,qty);
});

