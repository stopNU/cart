(function(){
	"use strict";

	var productsService = function($http){

		var getProducts = function(){
			return $http.get("data/products.json")
							.then(function(response){
								return response.data;
							})
		}

		var getCategories = function(){
			return $http.get("data/categories.json")
							.then(function(response){
								return response.data;
							})
		}

		return {
			getProducts: getProducts,
			getCategories: getCategories
		}
	}

	angular
		.module("Main")
		.factory('productsService', productsService)

}());