(function(){
	"use strict";

	var cartService = function($http, $rootScope){
		var addProductsToCart = function(product, quantity){
			$rootScope.cartProducts[product.name] = {
				product: product,
				quantity: quantity
			}
		}

		return	 {
			addProductsToCart: addProductsToCart
		}
		
	}

	angular
		.module("Main")
		.factory('cartService', cartService)

}());