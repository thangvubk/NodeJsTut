var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://test:test@ds121091.mlab.com:21091/todo');

//create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
	item: String
});

//model is the same as table in SQL
var todo_collection = mongoose.model('todo_of_alex', todoSchema);

// this is for test
//var data = [{item:'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
	app.get('/todo', function(req, res){
		//get data from mongoose db
		todo_collection.find({}, function(err, data){
			if (err) throw err;
			res.render('todo', {todos:data});
		})
	});
	app.post('/todo', urlencodedParser, function(req, res){
		// get data from the view and add it to mongoose DB
		todo_collection(req.body).save(function(err, data){
			if(err) throw err;
			res.json(""); //that make ajax invoke
		});
		
	});
	app.delete('/todo/:item', function(req, res){
		// delete the requested item from mongodb
		todo_collection.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
			if (err) throw err;
			res.json(""); //that make ajax invoke
		})
	});
};