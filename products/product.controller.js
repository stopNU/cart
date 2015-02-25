(function(){

	angular
		.module("Main.product", [])
		.controller("productController", productController);

	function productController($scope, productsService, $routeParams, cartService){

		var modelProduct = function(productArray){
			$scope.product = productArray[0];

		}

		$scope.addToCart = function(product){
				console.log(product);
                  var quantity = this.quantity;
                  cartService.addProductsToCart(product, quantity);
               }

		productsService.getProduct($routeParams.id)
			.then(modelProduct);
	}

}());