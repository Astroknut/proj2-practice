const mongoose = require('mongoose');

var Beer = mongoose.Schema({
	name: String,
	abv: Number,
	description: String,
	tagline: String,
	image: String,
	foods_pairing: [ String ]
});

module.exports = mongoose.model('Beer', Beer);