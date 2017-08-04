const beerList = function(){
	$.ajax({
		type: "GET",
		url: 'https://api.punkapi.com/v2/beers/random',
		dataType: 'json',
		success: function(data){
			data.forEach(function(el){
				$('#beers').append("<li>" + el.name + "<br>" + "ABV%:" + el.abv + "<br>" + el.tagline + "<br>" + el.description + "<br>" + "Enjoy with:" + el.food_pairing + "<br>" + "<img src=" + el.image_url + "></li>");
			});
		}
	});
};

beerList();