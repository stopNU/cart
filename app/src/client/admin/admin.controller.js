(function(){

	angular
		.module("Main.admin", [])
		.controller("adminController", adminController);

	function adminController($scope, adminService, productsService, $routeParams){

          	var modelProducts = function(data){
                    $scope.products = data;
               }

          	$scope.delete = function(id){
				adminService.deleteProduct(id);
				console.log(id);
			}

			adminService.getProductById($routeParams.id)
				.then(function(data){
					$scope.productx = data;
					console.log(data);
				});

			// $scope.find = function(id){
			// 	adminService.getProduct(id).then(modelProducts);
			// 	console.log(id);
			// }

			
          	productsService.getProducts()
               .then(modelProducts);

	

     
	}

}());