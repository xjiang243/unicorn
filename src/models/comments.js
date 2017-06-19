var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new mongoose.Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	content: {
		type: String,
		require: true
	},
	rating: {
		type: Number,
		required: true
	},
	myCheckbox: {
		type: Boolean
	}

});
schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model("comments", schema);




