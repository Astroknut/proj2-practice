const apiUrl = 'https://api.punkapi.com/v2/beers';

const randomBeer = function(){
	$.ajax({
		type: "GET",
		url: apiUrl +'/random',
		dataType: 'json',
		success: function(data){
			data.forEach(function(el){
				$('#beers').append("<ul id='beerList'><li>" + el.name + "<br>" + "ABV%:" + el.abv + "<br>" + el.tagline + "<br>" + el.description + "<br>" + "Enjoy with:" + el.food_pairing[0] + "<br>" + "<img src=" + el.image_url + "><br><button id='save' class='btn btn-success' type='button'>Save Beer</button></li><ul>");
				const saveBeer = function(){
					console.log('saved');
				};
				$('#save').on('click', saveBeer);	
			});
		}
	});
};


const search = function(e){
	e.preventDefault();
	$('#beerList').remove();
	const beersList = function(){
		$.ajax({
			type: "GET",
			url: apiUrl + '?beer_name=' + $('#type').val(),
			dataType: 'json',
			success: function(data){
				data.forEach(function(el){
					$('#beers').append("<ul id='beerList'><li>" + el.name + "<br>ABV%:" + el.abv + "<br>" + el.tagline + "<br>" + el.description + "<br>Enjoy with: " + el.food_pairing[0] + "<br><img src=" + el.image_url + "><br><button id='save' class='btn btn-success' type='button'>Save Beer</button></li><br></ul>");
					});
					const saveBeer = function(){
						console.log($(this).closest('li'));
					};
					$('button').on('click', saveBeer);
				}
			}
		);
	};

	beersList();
};


$('#submit').on('click', search);



randomBeer();