	(function(){
	"use strict";

	var adminService = function($http){

		var products           = [];

		var getProducts = function(){
			return $http.get("/api/products")
						.then(function(response){
							return response.data;
						})
		};

		var deleteProducts = function(product){
			delete("/api/products/:id");
		};


		return {
			getProducts: getProducts,
			deleteProducts: deleteProducts
		}


		
	}



	angular
		.module("Main")
		.factory('adminService', adminService)

}());