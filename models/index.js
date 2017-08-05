const mongoose = require('mongoose');
const passport = require('passport');
mongoose.connect("mongodb://localhost/proj2-practice");


module.exports.User = require('./user.js');
module.exports.Beer = require('./beer.js');