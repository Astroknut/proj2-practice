const passport = require('passport');
const db = require('../models');

//GET /
function getHome(req,res,next){
	res.render('index.ejs');
}

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

//Displays users saved beers
function getList(req,res){
	var userBeers = req.user.beers;
	res.render('myBeers.ejs', {userBeers: userBeers});
}

//Gets one beer by ID
function getMyBeer(req,res){
	res.send('get my beer');

}

//Updates notes for beer
function updateBeer(req,res){
	
	res.send('update');
}

//Removes beer from User.beers
function deleteBeer(req,res){

	console.log('Yo route is up');
	var id = req.params.id;
	console.log(id);
	var userId = req.user._id;
	console.log(userId);

	db.User.findOneAndUpdate(
		{_id: userId}, 
		{$pull: {beers: {_id: id}}},
		{upsert: true},
		function(err,user){
			if(err) res.send(err);
			return res.redirect('../myBeers');
		}
	);

	
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
	getHome: getHome,
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret,
	getBeers: getBeers,
	getList: getList,
	deleteBeer: deleteBeer,
	addBeer: addBeer,
	getMyBeer: getMyBeer,
	updateBeer: updateBeer
};
