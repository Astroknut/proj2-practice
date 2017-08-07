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
		successRedirect: '/myBeers',
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

//Shows random beer before search
function getBeers(req,res,next){
	res.render('beers.ejs');
}

//Returns beers JSON for current user
function getList(req,res){
	var thisUser = req.user;
	console.log(thisUser);
	res.json(thisUser.beers);
}

//Allows user to save beer to db
function addBeer(req,res){
	var userBeers = req.user.beers;
	var newBeer = new db.Beer({
		name: req.body.name,
		abv: req.body.abv,
		tagline: req.body.tagline,
		description: req.body.description,
		food_pairing: [req.body.food_pairing],
		image: req.body.image_url
	});
	userBeers.push(newBeer);
	req.user.save();
	res.json(newBeer);
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
	addBeer: addBeer
};
