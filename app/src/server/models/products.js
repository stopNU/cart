var mongoose = require('mongoose');

var schema = {
	title: String,
	price: Number,
	category: String,
	image: String
}

var Products = mongoose.model("Products", schema);

module.exports = Products;
