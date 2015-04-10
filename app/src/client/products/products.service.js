	(function(){

	var productsService = function($http){

		var categoriesSelected = [];

		var getProducts = function(){
			return $http.get("/api/products")
						.then(function(response){
							setProducts(response.data)
							return response.data;
						})
						
		};

		var setProducts = function(data){
			products = data;
		}

		var getProduct = function(title){
			return findProductInArray(products, title);
		}
		
		var findProductInArray = function(data, title){
			return data.filter(function(element){
				if(element.name === title){
					return element;
				}
			});
		}

		var getCategories = function(){
			return $http.get("data/categories.json")
							.then(function(response){
								return response.data;
							})
		};

		var getCategoriesSelected = function(){
			return getCategoriesSelected;
		};


		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }

        };

		// var productFilter = function(product){
  //           if (categoriesSelected.length > 0) {
  //               if (categoriesSelected.indexOf(product.category) < 0){
  //                   return;
  //               }
  //           }
  //           return product;
  //       } 

		return {
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			getCategoriesSelected: getCategoriesSelected,
			categoryChange: categoryChange,
			// productFilter: productFilter
		}
	}


	angular
		.module("Main")
		.factory('productsService', productsService)

}());