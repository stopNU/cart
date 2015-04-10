(function(){
	"use strict";

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

		function cartController($rootScope, $scope, cartService){

   		$scope.deleteProd = function(cartProduct){
			cartService.delProd(cartProduct);
		};


		$scope.confirmBuy = function(cartProduct){
				var custName = this.custName;
				var custEmail = this.custEmail;
				console.log(custName, custEmail);
				cartService.confirmCart(custName, custEmail);
			}


		}
	


}());