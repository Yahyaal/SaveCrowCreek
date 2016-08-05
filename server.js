var express = require('express');			// Import express
var bodyParser = require('body-parser');	// We use bodyParser to parse POST requests
var mongoose = require('mongoose');			// Import mongoose

mongoose.Promise = Promise;							// Set the default Promise handler to the global ES6 Promise.
mongoose.connect('mongodb://localhost/savecrowcreek');	// Connect to the local MongoDB instance and use 'okcoders' as the database.

var app = express();								// Create our express application
app.use(express.static('./public'));				// Serve our static content out of public/
app.use(bodyParser());								// Use the bodyParser to parse our POST requests
app.listen(8080, function() {						// Start our server
	console.log('Listening on http://localhost:8080');
});

var Test = require('./models/test');				// Import our Post model (defined in models/post.js)

app.get('/tests', function(req,res) {				// Define a GET /posts route
	Test.find().exec().then(function(tests) {		// Find all posts
		res.json(tests);
	});
	
});

app.post('/tests', function(req,res) {				// Define a POST /posts route
	var test = req.body;
	if (test._id) {
		test.findOneAndUpdate({_id:test._id}, test).exec().then(function() {
			res.json(true);
		});
	} else {
		var newTest = new Test(test);					// Create a new post document from the body
		
		newTest.save().then(function() {					// Save the post and then...
			res.json(true);								// Return true (true has no meaning here, we easily could return the post we just created)
		});
	}
});
app.delete('/tests/:id', function(req,res) {
	var id = req.params.id;
	Test.findOneAndRemove({_id:id}).exec().then(function() {
			res.json(true);
		});
});