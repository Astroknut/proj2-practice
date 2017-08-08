//Require modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');


mongoose.connect('mongodb://localhost/proj2-practice');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({secret: 'PROJECT 2 PRACTICE'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});

const routes = require('./config/routes');
app.use(routes);

//***DATABASE***

const db = require('./models');

//***ROUTES***
//

app.delete('/myBeers', function(req,res){
	res.write('Route');
});



app.use(express.static('public'));



app.listen(process.env.PORT || 3000);



