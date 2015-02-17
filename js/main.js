(function(){
	"use strict";

	angular.module('Main', []).controller('MainController', MainController);

	function MainController($scope, $http){

    $scope.categoriesSelected = new Array();

		var getProducts = function(res){
			$scope.products = res.data;
		}
		var getCategories = function(res){
			$scope.category = res.data;
		}
		var getError = function(reason) {
			$scope.error = "Something happened with the data";
		}
	

		$scope.categoryChange = function(category){
			var i = $scope.categoriesSelected.indexOf(category); // -1 for not checked
			if(i > -1){
				$scope.categoriesSelected.splice(i, 1);
			}
			else{
				$scope.categoriesSelected.push(category);
			}
		}

		$scope.categoryFilter = function(product){
			if($scope.categoriesSelected.length > 0){
				if($scope.categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		$http.get("data/products.json")
			.then(getProducts, getError);

		$http.get("data/categories.json")
			.then(getCategories, getError);

		$scope.cart = []
		

      
      $scope.addToCart = function(product){
      	
			$scope.cart.push(product);
//						$scope.cart.push({product: product, qty: -1});

      	}
      

	}


})();