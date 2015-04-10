var Products = require('../../models/products');
// Wrap all the methods in an object

var product = {
  read: function(req, res, next){
    Products.find({"_id": req.params.id}, function(err, data){
      if(err) console.error;
      res.json(data);
    });
  },
  readById: function(req, res, next){
    Products.findById(req.params.id, function(err, data){
      if(err) console.error(err);
      res.json(data);
    })
  },
  create: function(req, res, next){
    res.send(req.body);
  },
  update: function(req, res, next){
    res.json({type: "Update", id: req.params.id, body: req.body });
  },
  delete: function(req, res, next){
    Products.remove({"_id": req.params.id},function(err, product){ 
    if(err) console.error;
      res.send(product);
    });
  },
  getAll: function(req, res, next){
    Products.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  } 
}

// Return the object
module.exports = product;
