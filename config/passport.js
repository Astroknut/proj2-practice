const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js');

module.exports = function(passport){

	passport.serializeUser(function(user,callback){
		callback(null,user.id);
	});

	passport.deserializeUser(function(id,callback){
		User.findById(id, function(err,user){
			callback(err,user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req,email,password,callback){
		//Find user with email
		User.findOne({'local.email': email}, function(err,user){
			if(err) return callback(err);
			if(user){
				return callback(null,false,req.flash('signupMessage', "This email is already registered"));
			} else {
				let newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.hash(password);
				newUser.save(function(err){
					if(err) throw err;
					return callback(null,newUser);
				});
			}
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password', 
		passReqToCallback: true
	}, function(req,email,password,callback){
		
		//Find User with email
		User.findOne({'local.email': email}, function(err,user){
			if(err) return callback(err);

			//If no user is found or password is incorrect
			if(!user || !user.validPassword(password)){
				return callback(null,false,req.flash('loginMessage', 'Email or password incorrect'));
			}

			return callback(null,user);	
		});
	}));
};