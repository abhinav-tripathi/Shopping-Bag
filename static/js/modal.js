/*
 * This file contains modal box related code
 * @project   Shopping Bag
 * @date      2016-08-12
 * @author    Abhinav Tripathi
 @dependency jquery.min.js
 */

'use strict';

(function( $ ) {

    $.fn.modal = function( action ) {

        if ( action === "open") {
            var modalContent = $('.pd').html();
            var modal = '<div class=overlay><div class=modal><div class=close>Close</div>'+modalContent+'</div></div>';
            $('body').append(modal);
            $('.overlay').fadeIn(300);
        }

        if ( action === "close" ) {
            $('.overlay').fadeOut(300);
            $('.overlay').remove();
        }

    };

}( jQuery ));