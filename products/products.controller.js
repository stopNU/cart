(function(){
	"use strict";

	angular
		.module("Main.products", [])
		.controller('productsController', productsController);

		function productsController($scope, productService, cartProducts){

			var modelProducts = function(data){
				$scope.products = data;
			}

			$scope.addToCart = function(product){
				var quantity = this.quantity;
				cartService.addProductToCart(product, quantity);
			}

		productService.getProducts()
			.then(modelProducts);

		}		


}());