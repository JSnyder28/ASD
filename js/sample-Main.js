$('#home').on('pageinit', function(){
	//code needed for home page goes here
	$('#viewRcps').click(getData);
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#newRcpForm'),
			formErrorLink = $('#errorsLink');

		    myForm.validate({			
			invalidHandler: function(form, validator) {
				/*formErrorLink.click();*/
				/*var html = '';
				for (var key in validator.submitted) {
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('select-ui')
					var fieldName = legend.length ? legend.text() : label.text();
					console.log(fieldName);
					html += '<li>'+ fieldName +'</li>';
				};
				$('#errors ul').html(html);*/
			},
			submitHandler: function() {
				var data = myForm.serializeArray();
					storeData(data);
					getData();					
			}

			})
	
	//any other code needed for addItem page goes here

});

// View Recipes Page.
$('#rcpDispPage').on('pageinit', function() {
	var clearLink = $('#clearAll');
	clearLink.click(clearLocal);
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function(){  /* Retrieves json data from json.js and is loaded through HTML */
		/* Stores JSON object data in local storage */
		for(var j in json) {
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(json[j]));
		};
};

var getData = function(data){ /* Retrieves saved data in local storage and displays it in the view recipes page */
		for(var i = 0, l = localStorage.length; i < l; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			$('#rcpDispPage').append();
		}

		/* if(localStorage.length === 0) {
			autofillData();
		}
		/* Creates the ul and li's that contain the recipe information from local storage 
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute('id', 'items');
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i = 0, l = localStorage.length; i < l; i++) {
			var makeLi = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);  /* Converts local storage to string value to an object 
			var makeSublist = document.createElement('ul');
			makeLi.appendChild(makeSublist);
		}
			for(var o in obj) {
				var makeSubLi = document.createElement('li');
				makeSublist.appendChild(makeSubLi);
				var optSubText = obj[o][0] + " " + obj[o][1];
				makeSubLi.innerHTML = optSubText;
				makeSublist.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);  /* Creates edit and delete link for each recipe item in local storage */
		
};

var storeData = function(data, key){
		if(!key) {
			var id = Math.floor(Math.random()*100000001);
		} else {
			id = key;
		}
	localStorage.setItem(id, JSON.stringify(data));
}; 

var	deleteItem = function(){
			
};
					
var clearLocal = function(){

	localStorage.clear();
	window.location.reload();
	return false;

};


/*$('#viewRcps').click(getData);*/
