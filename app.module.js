(function(){
	"use strict";

	angular
		.module("Main", ["ngRoute","Main.products", "Main.cart", "Main.product"])
                // .controller("appCtrl", appCtrl)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		})
		.config(function($routeProvider){
        	$routeProvider
        		.when('/product/:id', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
        		.when('/', {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
                        .when('/checkout', {
                                templateUrl: './cart/checkout.html',
                                controller: 'cartController'
                        })
        		.otherwise({ redirectTo: '/' });
                });

                // function appCtrl($scope){
                //         $scope.$back = function() { 
                //                 window.history.back();
                //         }
                // }
        
                



}());