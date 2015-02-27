(function(){
	"use strict";

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

		function cartController($rootScope, $scope, cartService){

   		$scope.deleteProd = function(cartProduct){
			cartService.delProd(cartProduct);
		};

		// sending variables with data to service
		$scope.sendCust = function(customer){
                  var custEmail = this.custEmail;
                  var custName = this.custName;
                  console.log(custEmail, custName);
                  cartService.sendCustData(custEmail, custName);
               }

		}
	


}());