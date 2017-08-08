const expect = require('chai').expect;
const request = require('request');
const server = require('../server.js');

var URL = 'https://api.punkapi.com/v2/beers';

describe('Hoppy', function() {
	var apirError,apiResponse,apiBody;
	before(function(done){
		request(URL, function(error, response, body){
			apirError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it('should return 200 - OK', function(){
		expect(apiResponse.statusCode).to.eq(200);
	});
});

describe('Beers', function() {
	it('should list one random beer on /beers GET', function(done){
		chai.request(server)
			.get('/beers')
			.end(function(err, res){
				res.should.have.status(200);
				done();
			});
	});
});