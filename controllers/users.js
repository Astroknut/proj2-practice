const passport = require('passport');
const db = require('../models');

//GET /signup
function getSignup(req,res,next){
	res.render('signup.ejs',{message: req.flash('signupMessage')});
}

//POST /signup
function postSignup(req,res,next){
	//Saves new user
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/beers',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signupStrategy(req,res,next);
}

//GET /login
function getLogin(req,res,next){
	res.render('login.ejs', {message: req.flash('loginMessage')});
}

//POST /login
function postLogin(req,res,next){
	let loginProperty = passport.authenticate('local-login', {
		successRedirect: '/beers',
		succesFlash: 'Welcome!',
		failureRedirect: '/login',
		failureFlash: true
	});

	return loginProperty(req,res,next);
}

//GET /logout
function getLogout(req,res,next){
	req.logout();
	res.redirect('/');
}

//Restricted page??
function secret(req,res){
	res.send('Welcome to the secret page');
}

function getBeers(req,res,next){
	res.render('beers.ejs');
}

function getList(req,res){
	db.Beer.find(function(err,beer){
		if(err){console.log(err);}
		res.json(beer);
	});
}

function getUserEmail(req,res){
	res.json({email: req.user.local.email});
}



module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret,
	getBeers: getBeers,
	getList: getList,
	getUserEmail: getUserEmail
};
