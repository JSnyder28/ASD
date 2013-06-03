$('#home').on('pageinit', function() {
	
});

$('#add').on('pageinit', function() {
	$('form').on('submit', function() {
		var doc = {};
		doc.type = "recipe";
		doc.category = ["Category:", $('#selectChoice1').val()];
		doc.name = ["Name:", $('#rcpName').val()];
		doc.ingredients = ["Ingredients:", $('#txtArea-A').val()];
		doc.directions = ["Directions:",$('#txtArea-B').val()];
		doc.value = ["Rating:", $('#slider').val()];
		$.couch.db('asdrecipes').saveDoc(doc, {
			success: function(data) {
				console.log(data);
			},
			error: function(status) {
				console.log(status);
			}
		});
	});
});

$('#view').on('pageinit', function() {

	$.couch.db("asdrecipes").view("recipes/recipes", {
		success: function(data) {
			$('#viewList').empty();
			$.each(data.rows, function(index, recipe) {
				var item = (recipe.value || recipe.doc);
				$('#viewList').append(
				  $('<li>').append(
				    $('<a href="recipe.html?recipe='+ recipe.id +'%rev='+ recipe.key +'">')
				     .text(item.name)
				  )
				);
			});
			$('#viewList').listview('refresh');
		}
	});
		
	$('#autoFill').on('click', function() {
		$.ajax({
			"url": "_view/recipes",
			"dataType": "json",
			"success": function(data) {
			console.log(data);
				$.each(data.rows, function(index, recipe) {
					var category 	= recipe.value.category;
						name	 	= recipe.value.name;
						ingredients	= recipe.value.ingredients;
						directions 	= recipe.value.directions;
						favorite 	= recipe.value.favorite;
						rating 		= recipe.value.rating;
					$('<ul id="recipeItems">' + category 
					  + '<li>' + name + '</li>'
					  + '<li>' + ingredients + '</li>'
					  + '<li>' + directions + '</li>'
					  + '<li>' + favorite + '</li>'
					  + '<li>' + rating + '</li>'
					 + '</ul>')
					 .appendTo('#view > section')
					;
				});
			}
		});
	});
});


$(document).on('pageinit', '#recipe', function() {
	var urlData = $(this).data('url');
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('%');
	var urlValues = {};
	for (var i in urlPairs) {
		var keyValue = urlPairs[i].split('=');
		var key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(keyValue[1]);
		urlValues[key] = value;
	}
	console.log(urlValues.recipe);
	$.couch.db('asdrecipes').openDoc(urlValues.recipe, {
		success: function(data) {
			console.log(data);
			
			$('#detailsList').append(
				'<li>' + data.category + '</li>'
				+ '<li>' + data.name + '</li>'
				+ '<li>' + data.ingredients + '</li>'
				+ '<li>' + data.directions + '</li>'
				+ '<li>' + data.rating + '</li>'
				+ '<li>' + data.favorite + '</li>'
			);
		},
		error: function(status) {
			console.log(status);
		}
	});
	
	$('#editItem').on('click', function() {
		$.couch.db('asdrecipes').openDoc(urlValues.recipe, {
			success: function(data) {
				console.log(data);
				
				$('.select option').attr('selected', 'selected');
				$('#rcpName').val(data.name[1]);
				$('#txtArea-A').val(data.ingredients[1]);
				$('#txtArea-B').val(data.directions[1]);
				$('#slider').val(data.rating[1])
				if (data.favorite[1] === "Yes" || "on") {
					$('.checkboxFav').prop('checked', true);
				} else {
					$('.checkboxFav').prop('checked', false);
				};
			},
			error: function(status) {
				console.log(status);
			}
		});
	});
	
	$('#deleteItem').on('click', function() {
		var doc = {
			_id: urlValues.recipe,
			_rev: urlValues.rev
		};
		$.couch.db('asdrecipes').removeDoc(doc, {
			success: function(data) {
				console.log(data);
			},
			error: function(status) {
				console.log(status);
			}
		});
	});
});






