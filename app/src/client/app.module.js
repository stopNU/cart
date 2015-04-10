(function(){
	"use strict";

	angular
		.module("Main", ["ngRoute","Main.products", "Main.cart", "Main.product", "Main.admin"])
                // .controller("appCtrl", appCtrl)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
                        // $rootScope.cartProduct = {};
		})
		.config(function($routeProvider){
        	$routeProvider
        		.when('/product/:_id', {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
        		.when('/', {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
                        .when('/checkout', {
                                templateUrl: '/cart/checkout.html',
                                controller: 'cartController'
                        })
                        .when('/admin/edit/:id', {
                                templateUrl:"admin/adminEdit.html",
                                controller:"adminController"
                        })
                        .when('/admin', {
                                templateUrl: '/admin/admin.html',
                                controller: 'adminController'
                        })
                        .when('/order-confirm', {
                        templateUrl:"/cart/orderConfirm.html",
                        controller:""
                })
        		.otherwise({ redirectTo: '/' });
                })
                .directive('backButton', function(){
                        return {
                                restrict: 'A',

                                link: function(scope, element, attrs) {
                                        element.bind('click', goBack);

                                function goBack() {
                                        history.back();
                                        scope.$apply();
                                        }
                                }
                        }
                });   



}());