var mongoose = require('mongoose'),
	dbname = "cartdb";

var Product = mongoose.model("Product", {
		id: String,
		title: String,
		price: Number,
		category: String,
		image: String
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts();
	});
}

function insertProducts(){

	Product.create(
		{
			title: "Egyptian Cat",
			price: 25,
			category: "Erotic Statues",
			image: "egyptian-cat.jpg"
		},
		{
			title: "Egyptian Cat Again",
			price: 35,
			category: "Statues",
			image: "egyptian-cat.jpg"
		}

	);

	/*var products = new Product({
		name: "Old Rasputin",
		price: 40,
		category: "Russian Imperial Stout",
		image: "old_rasputin.jpg",
		brewery: "North Coast Brewing",
		alcohol: 9	
	});	
	products.save(function(err){
		if(err) console.log(err);
	});*/

}