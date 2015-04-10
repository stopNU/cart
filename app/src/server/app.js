// Initialize the express framework
var express 	 	= require('express'),
	path			= require('path'),
	mongoose 		= require('mongoose'),
// Initialize the body-parser
// in order to receive the request body
// in POST, PUT and DELETE
	bodyParser		= require('body-parser'),
	databaseName	= 'cartdb';

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));

// Routes set up
var router 	= express.Router();
var product = require('./controllers/api/product');

// Get all products
router.get('/api/products', product.getAll);
// Create a product
router.post('/api/product', product.create);
// Request product by Id
router.get('/api/productById/:id', product.readById);

// Get one product, update one product, delete one product
router.route('/api/product/:id')
	.get(product.read)
	.put(product.update)
	.delete(product.delete);

// Register the routing
app.use('/', router);

mongoose.connect('mongodb://localhost/' + databaseName);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

// Start up the server
function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	})
}