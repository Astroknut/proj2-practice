const mongoose = require('mongoose');
const passport = require('passport');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/personal-api");


module.exports.User = require('./user.js');
module.exports.Beer = require('./beer.js');