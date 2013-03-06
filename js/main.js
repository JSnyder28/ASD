// Joshua Snyder
// VFW 1211
// Project 3

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {

	// getElementById Function.
	var ge = function (x) {
			var _element = document.getElementById(x);
			return _element;
	};

	// Puts cursor on first form element when screen is loaded.
	var putCursorOnFirstEle = function () {
			var field = ge('category');
			if (field) {
				field.focus();
			}
	};

	// Create select field element and populate with options.
	var makeCats = function () {
			var formTag 	= document.getElementsByTagName('form'),
				selectLi 	= ge('select'),
				makeSelect 	= document.createElement('select');
				makeSelect.setAttribute('id', 'category');
			for(var i = 0, j = foodCategories.length; i < j; i++) {
					var makeOption = document.createElement('option');
					var optText = foodCategories[i];
					makeOption.setAttribute('value', optText);
					makeOption.innerHTML = optText;
					makeSelect.appendChild(makeOption);
			}
			selectLi.appendChild(makeSelect);
	};

	var disRating = function () {
			ge('ratingDis').value = ge('rating').value
	};

	// Find value of checkbox.
	var getCheckboxValue = function () {
			if(ge('goToMeal').checked) {
					favoriteValue = ge('goToMeal').value;
			} else {
					favoriteValue = "No";
			}
	};

	// Toggle form visibility on/off.
	var toggleControls = function (t) {
			switch(t) {
				case "on":
						ge('formHead').innerHTML			= "My Recipes!"
						ge('addRcpForm').style.display 	= "none";
						ge('clearAll').style.display 	= "inline";
						ge('viewLink').style.display 	= "none";
						ge('addRcp').style.display 		= "inline";
						break;
				case "off":
						ge('addRcpForm').style.display 	= "block";
						ge('clearAll').style.display 	= "inline";
						ge('viewLink').style.Display 	= "inline";
						ge('addRcp').style.display 		= "none";
						ge('items').style.display 		= "none";
						break;
				default:
						return false;
			}
	};
	
	var storeData = function (key) {
			// No key means a new item and a new key is required.
			if (!key) {
				var id = Math.floor(Math.random()*100000001);
			} else {
				// Overwrite the data being edited with a new id.
				// Key is the same that is passed through the editSubmit event handler, to the validate function
				// and then into the storeData function.
				id = key;
			}
			// Gather all form values and store it as an object.
			// Object properties contain an array with form labels and inout values.
			getCheckboxValue();
					var item 		= {};
					item.cat 		= ["Category:", ge('category').value];
					item.date 		= ["Date Added:", ge('dateAdded').value];
					item.rcpName 	= ["Recipe Name:", ge('rcpName').value];
					item.directions = ["Directions:", ge('directions').value];
					item.favorite 	= ["Go-To-Meal?:", favoriteValue];
					item.rating 	= ["Rating:", ge('rating').value];				
			// Save data to local storage using stringify.
			localStorage.setItem(id, JSON.stringify(item));
			if (ge('addIt').value == "Add It!") {
				alert("Recipe added!");
			}
			window.location.reload();
	};

	var getData = function () {
			toggleControls("on");
			if(localStorage.length === 0) {
					alert("No recipes to view. Default data has been added");
					autoFill();
			}
			// Write data from the local storage to the browser.
			var makeDiv = document.createElement('div');
			makeDiv.setAttribute('id', 'items');
			var makeList = document.createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			// Just in case "items" doesn't display through the toggle function.
			ge('items').style.display = "block";
			for(var i = 0, j = localStorage.length; i < j; i++) {
					var makeLi 	= document.createElement('li');
					var linksLi	= document.createElement('li');
					makeList.appendChild(makeLi);
					var key 	= localStorage.key(i);
					var value 	= localStorage.getItem(key);
					var obj 	= JSON.parse(value);
					// JSON.parse converts local storage string value to an object.
					var makeSubList = document.createElement('ul');
					makeLi.appendChild(makeSubList);
					getImage(obj.cat[1], makeSubList);
					for(var l in obj) {
							var makeSubLi = document.createElement('li');
							makeSubList.appendChild(makeSubLi);
							var optSubText = obj[l][0] + " " + obj[l][1];
							makeSubLi.innerHTML = optSubText;
							makeSubList.appendChild(linksLi);
					}
					// Creates edit and delete link for each local storage item
					makeItemLinks(localStorage.key(i), linksLi);
			} 
	};

	// Display an image for the recipe category that is selected for the recipe.
	var getImage = function (catName, makeSubList) {
			var imgLi = document.createElement('li');
			imgLi.setAttribute('id', 'thumbnailImg');
			makeSubList.appendChild(imgLi);
			var newImg = document.createElement('img');
			var setSrc = newImg.setAttribute('src', 'img/' + catName + '.png');
			imgLi.appendChild(newImg);
	};

	// Populates the form with data when local storage is empty.
	var autoFill = function () {
			// The JSON Object data is coming from the json.js file, which is loaded through the HTML file.
			// Stores the JSON Object data into local storage.
			for (var n in json) {
					var id = Math.floor(Math.random()*100000001);
					localStorage.setItem(id, JSON.stringify(json[n]));
			}
	};

	// Make Item links
	// Creates the edit and delete links for each local storage item
	var makeItemLinks = function (key, linksLi) {
		// adds an individual item edit link
		var editLink 	= document.createElement('a');
		editLink.href 	= "#";
		editLink.key	= key;
		var editText	= "Edit Recipe";
		editLink.addEventListener('click', editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Adds a linke break to seperate the edit and delete links
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);

		// Adds a individual tem delete link
		var deleteLink	= document.createElement('a');
		deleteLink.href	= "#";
		deleteLink.key	= key;
		var deleteText	= "Delete recipe";
		deleteLink.addEventListener('click', deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};

	var editItem = function () {
		// Get item data from local storage
		var value 	= localStorage.getItem(this.key)
		var item 	= JSON.parse(value);
		  // Toggles form visibility to on
		toggleControls('off');
		ge('formHead').innerHTML = "Edit Recipe!";
		  // Populates form with local storage values.
		ge('category').value 	= item.cat[1];
		ge('dateAdded').value 	= item.date[1];
		ge('rcpName').value 		= item.rcpName[1];
		ge('directions').value 	= item.directions[1];
		if (item.favorite[1] == "Yes") {
			ge('goToMeal').setAttribute("checked", "checked");
		}
		ge('rating').value 		= item.rating[1];
		ge('ratingDis').value 	= item.rating[1];

		// Remove the save EventListener from the Add It! button
		save.removeEventListener('click', storeData);
		// Change button text from "add It!" to "Update Recipe"
		ge('addIt').value 	= "Update Recipe";
		var editSubmit 		= ge('addIt');
		// Save the key for this function as an editSubmit property. The value can then be used when the edited data is saved.
		editSubmit.addEventListener('click', validate);
		editSubmit.key = this.key;

	};

	var deleteItem = function () {
		var ask = confirm("Are you sure you want to delete this Recipe?");
		if (ask) {
			localStorage.removeItem(this.key);
			alert("Recipe has been deleted");
			window.location.reload();
		} else {
			alert("Recipe was not deleted");
		}
	}

	var clearData = function () {
		if(localStorage.length === 0) {
				alert("You have no saved recipes!");
		} else {
				localStorage.clear();
				alert("All recipes have been removed");
				window.location.reload();
				return false;
		}
	};

	// Only checks for validity of Category, Recipe Name and Directions
	var validate = function (v) {
			// Define elements to check
			var getCat 					= ge('category');
			var getRcpName				= ge('rcpName');
			var getDirections			= ge('directions');
			// Update the error mesages list that is displayed
			errorMsg.innerHTML 			= "";
			getCat.style.border 		= "1px solid black";
			getRcpName.style.border 	= "1px solid black";
			getDirections.style.border 	= "1px solid black";

			// Error messages for required input fields
			var msgArry = [];
			// Category validation
			if (getCat.value === foodCategories[0]) {
					var catError = "Please choose a Category";
					getCat.style.border = "2px solid red";
					msgArry.push(catError);
			}
			// Recipe Name Validation
			if (getRcpName.value === "") {
					var rcpNameError = "Please enter a Recipe Name";
					getRcpName.style.border = "2px solid red";
					msgArry.push(rcpNameError);
			}
			// Directions validation
			if (getDirections.value === "") {
					var directionsError = "Please enter the Recipe Directions";
					getDirections.style.border = "2px solid red";
					msgArry.push(directionsError);
			}
			// Display applicable error messages
			if (msgArry.length >= 1) {
					for (var i = 0, j = msgArry.length; i < j; i++) {
							var txt = document.createElement('li');
							txt.innerHTML = msgArry[i];
							errorMsg.appendChild(txt);
					}
				// Prevent the form from storing data
				v.preventDefault();
				return false;	
			} else {
				// If all fields are completed, then save the data. Send the key value that came from the editData function.
				// this.key value was passed from the editSubmit event listener as a property.
				storeData(this.key);
			}
			if (ge('addIt').value == "Update Recipe") {
					alert("Recipe Updated");
			}
			
	};

	// Variable Defaults
	var foodCategories 	= ["--Choose One--", "American", "Chinese", "Italian", "Japanese", "Mexican", "Seasonal"];
		favoriteValue 	= "No";
		errorMsg		= ge('errors')

	// Function Calls
	makeCats();
	putCursorOnFirstEle();
	//disRating();

	// eventListeners
	var viewRating = ge('rating');
	viewRating.addEventListener('click', disRating);
	var viewLink = ge('viewLink');
	viewLink.addEventListener('click', getData);
	var clearLink = ge('clearAll');
	clearLink.addEventListener('click', clearData);
	var save = ge('addIt');
	save.addEventListener('click', validate);
});
