// Joshua Snyder
// ASD 1303
// Project Week 1

	
$('#home').on('pageinit', function() {

});
// END

$('#add').on('pageinit', function() {
	// When the add recipe page is ready, run this code.
	$('form').on('submit', function(event) {
	// Form submission code.
		var id = Math.floor(Math.random()*100000001);
		 	recipe = $(this).serializeArray();
		localStorage.setItem(id, JSON.stringify(recipe));
		// Serializes the data from the form input fields, generates a random id, and saves the id and object, to local storage, as json data.
		console.log(recipe);
		
	return false;
		
	});
	
	//$('<h1></h1>').appendTo('#add header')
		//.text('Add Recipe!')
	//;
	// Creates the h1 tag, appends it to the header, and inserts the text for the heading.
});

// END

$('#view').on('pageinit', function() {
	$('<ul>').before($('#view input').appendTo($('#view section')));

	// When the view recipes page is ready, run this code.
	$('clearAll').on('click', function() {
		// Clears all saved recipes, and returns to the homepage.
	});

	$('editRcps').on('click', function() {
		// Allows individual recipes to be edited and updated.
	});

});
// END
