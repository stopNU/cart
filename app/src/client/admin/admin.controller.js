(function(){

	angular
		.module("Main.admin", [])
		.controller("adminController", adminController);

	function adminController($scope, adminService, $rootScope){

          var modelProducts = function(data){
                    $scope.products = data;
               }

          adminService.getProducts()
               .then(modelProducts);


     
	}

}());