(function(){
	"use strict";

	var cartService = function($http, $rootScope){
		
		var addProductsToCart = function(product, quantity){
			$rootScope.cartProducts[product.title] = {
				product: product,
				quantity: quantity
			}


			$rootScope.moreProd = function(cartProduct){
			$rootScope.cartProducts[cartProduct.title]["quantity"] += 1;
			
			$rootScope.lessProd = function(cartProduct){
			if($rootScope.cartProducts[cartProduct.title]["quantity"] > 1){
				$rootScope.cartProducts[cartProduct.title]["quantity"] -= 1;				
					}
				}
			}	

		}
		// Trying to put customer data in array (not working)
		var sendCustData = function(customer, custEmail, custName){
			
			$rootScope.customer = {
				custEmail: custEmail,
				custName: custName
			}
			console.log(customer);
		}		

		var deleteProd = function(cartProduct){
			delete $rootScope.cartProducts[cartProduct.title];
		}		

		return	 {
			addProductsToCart: addProductsToCart,
			deleteProd: deleteProd,
			sendCustData: sendCustData
		}
	}

	angular
		.module("Main")
		.factory('cartService', cartService)

}());