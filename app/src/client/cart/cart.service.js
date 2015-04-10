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

		var deleteProd = function(cartProduct){
			delete $rootScope.cartProducts[cartProduct.title];
		}		

		var confirmCart = function(custName, custEmail){
				$rootScope.confirmedOrder = {};

				// Her sendes en request om at gemme i databasen (bruger api'en, og api'en er knyttet til schema)
				$http.post('api/order', {
					"custName": custName,
					"custEmail": custEmail,
					"Products": new Array($rootScope.cartProducts)
				});

				// Her oprettes der et objekt til midlertidligt at vise data
				$rootScope.confirmedOrder["custBasket"] = {
					"Customer": {custName: 
									{"custName": custName,
									 "custEmail": custEmail}
								},
					"products": $rootScope.cartProducts
				}
				console.log($rootScope.confirmedOrder);
			}
		return	 {
			addProductsToCart: addProductsToCart,
			deleteProd: deleteProd,
			confirmCart: confirmCart
		}
	}

	angular
		.module("Main")
		.factory('cartService', cartService)

}());