// Joshua Snyder
// ASD 1303
// Project Week 1

$(document).ready(function() {
	
	$('#home').on('pageinit', function() {

		return false;
	});
	// END Method

	/*$('#home').on('pageinit', function() {
		$('#american').on('click', function() {
			$('<section data-role="page" id="americanRcps">').appendTo('body');
				$('<section data-role="content">').appendTo('#americanRcps');
					$('<header data-role="header" data-position="fixed"></header>').appendTo('#americanRcps section');
						$('<h1>American</h1>').appendTo('#americanRcps section header');
			$('<footer data-role="footer" data-position="fixed"></footer>').appendTo('#americanRcps')
				$('<nav data-role="navbar">.').appendTo('#americanRcps footer');
					$('<ul>').appendTo('#americanRcps footer nav');
						$('<li><a href="#home">Home</a></li>').appendTo('#americanRcps footer nav ul');
						$('<li><a href="#add">Add</a></li>').appendTo('#americanRcps footer nav ul');
						$('<li><a href="#view">View</a></li>').appendTo('#americanRcps footer nav ul');
		}); */
		/* $('<ul>').appendTo('#home section');
		// Creates ul for categories in the homepage and appends it to the page
		$('<li><a href="#american">American</a></li>').appendTo('#home section ul'); */
		// Creates the li and anchor tags for the individual categories and appends them to the ul
		return false;
	});
	// END Method

	$("#newRcpForm").on("pageinit", function() {
		//When form page loads, validate function is active.

		return false;
	});
	// END Method

	$("#addIt").on("click", function() {
		//Saves current data from input fields of form into storage.

		return false;
	});
	// END Method

	$("resetIt").on("click", function() {
		//Resets all input in form fields.

		return false;
	});
	// END Method


	$("#resetAll").on("click", function() {
		//Clears all currently saved data.

		return false;
	});
	// END Method

});
// END DOM ready