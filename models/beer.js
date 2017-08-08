const mongoose = require('mongoose');

var Beer = mongoose.Schema({
	name: String,
	abv: Number,
	description: String,
	tagline: String,
	image: String,
	food_pairing: [ String ]
});

module.exports = mongoose.model('Beer', Beer);