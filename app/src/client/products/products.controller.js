(function(){
     "use strict";

     angular
          .module("Main.products", [])
          .controller('productsController', productsController)
          // .directive("productWidget", productWidget);

          function productsController($scope, productsService, cartService, $rootScope){
               
               var modelProducts = function(data){
                    $scope.products = data;
               }

               var modelCategories = function(data){
                    $scope.categories = data;
               }

               $scope.addToCart = function(product){
                  var quantity = this.quantity;
                  cartService.addProductsToCart(product, quantity);
               }

          productsService.getProducts()
               .then(modelProducts);

          productsService.getCategories()
               .then(modelCategories);
                  


          var updateCategoriesSelected = function(){
               $scope.categoriesSelected = productsService.getCategoriesSelected();
          }

          // $scope.productFilter = function(product){
          //      return productsService.productFilter(product);
          // }

          $scope.categoryChange = function(category){
               productsService.categoryChange(category);
               updateCategoriesSelected();
          }

          updateCategoriesSelected();
     }

     // function productWidget(){
     //      var widget = {
     //           templateUrl: "./products/product.widget.html",
     //           restrict: "E",
     //           controller: function($scope){
     //                $scope.buyme = function(product){
     //                     console.log(product);
     //                     $scope.addToCart(product);
     //                }
     //           }
     //      }

     //      return widget;
     // } 

}());