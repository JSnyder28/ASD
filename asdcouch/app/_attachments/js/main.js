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
		console.log(data);
			$('#viewList').empty();
			$.each(data.rows, function(index, recipe) {
			console.log(recipe);
				var item = (recipe.value || recipe.doc);
				$('#viewList').append(
				  $('<li>').append(
				    $('<a href="recipe.html?recipe='+ recipe.id +'rev='+ recipe.key +'">')
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


$('#recipe').on('pageinit', function() {
	var urlData = $(this).data('url');
	console.log(urlData);
	
	
	$('#deleteItem').on('click', function() {
		
	});
});






