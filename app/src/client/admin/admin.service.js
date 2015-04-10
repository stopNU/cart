	(function(){
	"use strict";

	var adminService = function($http, $rootScope, productsService){

		var deleteProduct = function(id){
			$http.delete('/api/product/' + id);
		}

		var getProductById = function(id){

			return $http.get("/api/productById/" + id)
						.then(function(response){
								return response.data;
				});
		}

		var getProduct = function(id){

			return $http.get("/api/product/" + id)
						.then(function(response){
								//setProducts(response.data)
								return response.data;
				})
		}
		

		return {
			getProduct: getProduct,
			getProductById: getProductById,
			deleteProduct: deleteProduct
		}


		
	}



	angular
		.module("Main")
		.factory('adminService', adminService)

}());