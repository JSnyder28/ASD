$('#view').on('pageinit', function() {

	
	$('#autoFill').on('click', function() {
		$.ajax({
			"url": "_view/recipes",
			"dataType": "json",
			"success": function(data) {
			console.log(data);
				$.each(data.rows, function(index, recipe) {
				console.log(recipe);
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