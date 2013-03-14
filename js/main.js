// Joshua Snyder
// ASD 1303
// Project Week 1

	
$('#home').on('pageinit', function() {

});
// END

$('#add').on('pageinit', function() {
	// When the add recipe page is ready, run this code.
	$('form').on('submit', function() {
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
	$(this).one('click', function() {
	//$('<div><h2>Test</h2></div>').appendTo('#view section')
	//	.attr('id', 'item')
	//	.append('<ul>')
	//;
	$('<div>').appendTo('#view section')
		.attr('id', 'items')
	;
	$('<ul>').appendTo('#view section div');
	$(localStorage).each(function() {
		$('<li>').appendTo('#view section div ul');
		var key = localStorage.key($(this));
			value = localStorage.getItem(key);
			obj = JSON.parse(value);
			console.log(obj[0]);
			$('<ul>').appendTo('#view section div ul li');
			$('<li>').appendTo('#view section div ul li ul');
			$('#view section div ul li ul li').append($(obj).map(function() {
				return $(this).val();
			}).get().join(", "));
		//$('<ul>').appendTo('#view section div ul li');
		//	$(obj).each(function() {
		//	console.log(obj);
		//		$('<li>').appendTo('#view section div ul li ul');

		//	});
	console.log();
	console.log(key);
	console.log(value);
	console.log(obj);
	});
	// When the view recipes page is ready, run this code.
	$('clearAll').on('click', function() {
		// Clears all saved recipes, and returns to the homepage.
		localStorage.clear();
	});

	$('editRcps').on('click', function() {
		// Allows individual recipes to be edited and updated.
	});
});
});
// END
