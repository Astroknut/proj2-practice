const apiUrl = 'https://api.punkapi.com/v2/beers';

//Generates random Number to select one beer on Search
var randomNum = function(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
};

//AJAX call to API for random beer
const randomBeer = function(){
	$.ajax({
		type: "GET",
		url: apiUrl +'/random',
		dataType: 'json',
		success: function(data){
			randomSelect = data[0];
			$('#beers').append("<div id='beerList'><ul><li>" + randomSelect.name + "</li><li>" + "ABV%:" + randomSelect.abv + "</li><li>" + randomSelect.tagline + "</li><li>" + randomSelect.description + "</li><li>Enjoy with: <ul><li>" + randomSelect.food_pairing[0] + "</li><li>" + randomSelect.food_pairing[1] +"</li><li>" +randomSelect.food_pairing[2] + "</li></ul></li><ul><br><img src=" + randomSelect.image_url + "><br><button id='save' class='btn btn-success' type='button'>Save Beer</button></div>");
			const saveBeer = function(){
				$.ajax({
					type: "POST",
					url: "/beers",
					dataType: 'json',
					data: randomSelect
				});
				location.reload();
			};
			$('#save').on('click', saveBeer);	
			}
	});
};

//AJAX call to API to search for beer based on type; Returns random beer from API
const search = function(e){
	e.preventDefault();
	$('#beerList').remove();
	const beersList = function(){
		$.ajax({
			type: "GET",
			url: apiUrl + '?beer_name=' + $('#type').val(),
			dataType: 'json',
			success: function(data){
				selectBeer = data[randomNum(0, data.length-1)];
				console.log(selectBeer);
				$('#beers').append("<div id='beerList'><ul><li>" + selectBeer.name + "</li><li>ABV%:" + selectBeer.abv + "</li><li>" + selectBeer.tagline + "</li><li>" + selectBeer.description + "</li><li>Enjoy with: <ul><li>" + selectBeer.food_pairing[0] +"</li><li>" + selectBeer.food_pairing[1] + "</li><li>" + selectBeer.food_pairing[2] + "</li></ul></li></ul><br><img src=" + selectBeer.image_url + "><br><button id='save' class='btn btn-success' type='button'>Save Beer</button></div>");
				const saveBeer = function(){
					$.ajax({
						type: "POST",
						url: "/beers",
						dataType: 'json',
						data: selectBeer
					});
					location.reload();
				};

			$('button').on('click', saveBeer);
			}
		});
	
	};
	beersList();
};



$('#submit').on('click', search);



$(document).ready(function(){
	console.log('its ready');
	randomBeer();
	console.log('after confirm');
});