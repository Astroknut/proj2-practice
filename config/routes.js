const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/static');

function authenticatedUser(req,res,next){
	if(req.isAuthenticated()) return next();
	res.redirect('/');
}


router.route('/')
	.get(staticsController.home);

router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup);

router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin);

router.route('/logout')
	.get(usersController.getLogout);

router.route('/beers')
	.get(authenticatedUser, usersController.getBeers)
	.post(usersController.addBeer);

router.route('/secret')
	.get(authenticatedUser, usersController.secret);

router.route('/myBeers')
	.get(usersController.getList);
	

module.exports = router;