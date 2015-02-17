(function(){
	"use strict";

	angular
		.module("Main", ["ngRoute","Main.products", "Main.cart", "Main.product"])
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		})
		.config(function($routeProvider){
        	$routeProvider
        		.when('/product/:id', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
        		.when("/", {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
        		.otherwise({ redirectTo: '/' });
        })


}());