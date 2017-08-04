const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
var Beer = require('./beer.js');

var User = mongoose.Schema({
	local: {
		email: String,
		password: String,
	},
	beers: [Beer.schema]
});

User.methods.hash = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);