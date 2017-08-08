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

//Welcome Page
router.route('/')
	.get(staticsController.home);

//Signup Page
router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup);

//Login Page
router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin);

//Logout redirects to Welcome Page
router.route('/logout')
	.get(usersController.getLogout);

//Lists Random Beer and saves to user.beers
router.route('/beers')
	.get(authenticatedUser, usersController.getBeers)
	.post(usersController.addBeer);

//Secret page? IDK
router.route('/secret')
	.get(authenticatedUser, usersController.secret);

//Gets list of Users Saved Beers
router.route('/myBeers')
	.get(usersController.getList);

//Delete and Update for Saved Beer
router.route('/myBeers/:id')
	.get(usersController.deleteBeer)
	.patch(usersController.updateBeer);
	




	



module.exports = router;