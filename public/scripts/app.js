const apiUrl = 'https://api.punkapi.com/v2/beers';
var randomNum = function(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
};

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
			};
			$('#save').on('click', saveBeer);	
			}
	});
};

const userList = function(){
	$.ajax({
		type: "GET",
		url: '/myBeers',
		dataType: 'json',
		success: function(data){
			console.log('Success');
			data.forEach(function(el){
				$('#myBeers').append("<div id='beerList'><ul><li>" + el.name + "</li><li>" + "ABV%:" + el.abv + "</li><li>" + el.tagline + "</li><li>" + el.description + "</li><li>Enjoy with: <ul><li>" + el.food_pairing[0] + "</li><br>" + el.food_pairing[1] + "</li><br>" + el.food_pairing[2] + "</li></ul></li><ul><br><img src=" + el.image_url + "><br><button id='delete' class='btn btn-danger' type='button'>Delete Beer</button><br>");
				const deleteBeer = function(e){
					console.log('delete button');
				};
				$('#delete').on('click', deleteBeer);	
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
			};

			$('button').on('click', saveBeer);
			}
		});
	};

	beersList();
};

$('#submit').on('click', search);


$(document).ready(function(){
	randomBeer();
	userList();
});