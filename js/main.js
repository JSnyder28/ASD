// Joshua Snyder
// ASD 1305
// Project Week 2

$('#home').on('pageinit', function() {

});



$('#add').on('pageinit', function() {
// FIRST edit code
/* $('#add').on('pageinit', function() {
	$('#addButton').on('click', function(itemKey) {
		if(!itemKey) {
			id = Math.floor(Math.random()*100000001);
		} else {
			id = itemKey;
		}
		var data = $('form').serializeArray();
		localStorage.setItem(id, JSON.stringify(data));
		window.location.reload();
		console.log(data);
		console.log(id);
	});
});



$('#view').on('pageinit', function() {
	$.each(localStorage, function(key, value) {
		console.log(key);
		console.log(value);
		var obj = JSON.parse(value);
		console.log(value);
		console.log(value);
		itemKey = key;
		console.log(itemKey);
		var list = $('<ul>Recipe: ' + itemKey + '</ul>')
						.attr('data-key', itemKey)
						;
		$('#displayDiv').append(list);
		for(var l in obj) {
			console.log(obj[l]);
			console.log(obj[l].name);
			console.log(obj[l].value);
			var subLi = $('<li>' + obj[l].name + ': ' + obj[l].value + '</li>');
			$(list).append(subLi);
		};
		var editItemLi = $('<li>');
		$(list).append(editItemLi);
		var editItemAnchor = $('<a>').attr("href", "#editPage")
									.html("Edit")
									;
		$(editItemLi).append(editItemAnchor);

		var deleteItemLi = $('<li>');
		$(list).append(deleteItemLi);
		var deleteItemAnchor = $('<a>').attr("href", "#")
									   .html("Delete")
									   ;
		$(deleteItemLi).append(deleteItemAnchor);

		$(deleteItemAnchor).on('click', function() {
			localStorage.removeItem(key);
			window.location.reload();
		});
	});



	$('#autoFill').on('click', function() {
		$.each(json, function(value) {
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(value));
			window.location.reload();
		});
	});


	$('#clearAll').on('click', function() {
		localStorage.clear();
		window.location.reload();
	});
});



$('#editPage').on('pageinit', function(itemKey){
	
});

}); */











/* $('#add').on('pageinit', function() {
	$('#addButton').on('click', storeData)
		var storeData = function(key) {
			// Check for already existent key.
			if (!key) {
				// Generate a random key number, assigning to id variable.
				var id = Math.floor(Math.random()*100000001);
			} else {
				// Overwrite data being edited.
				// Store new data with current key.
				id = key;
			}
			var item = $('form').serializeArray();
			localStorage.setItem(id, JSON.stringify(item));
		};

	$('#cancelLink').on('click', function() {

	});
});

$('#view').on('pageinit', function() {
	for(i = 0, j = localStorage.length; i < j; i++) {
		var makeLi = $('<li>');
			makeLinksLi = $('<li>');
		$('#itemsList').append(makeLi);
		var key = localStorage.key(i);
		console.log(key);
			value = localStorage.getItem(key);
			console.log(value);
			obj = JSON.parse(value);
			console.log(obj);
			makeList = $('<ul>');
		$(makeLi).append(makeList);
		for(var l in obj) {
			console.log(obj[0].name);
			var makeSubLi = $('<li>');
			$(makeList).append(makeSubLi);
			var text = obj[l].name + ": " + obj[l].value;
			console.log(text.value);
			$(makeSubLi).html(text);
			$(makeList).append(makeLinksLi);
		};
	itemLinks(localStorage.key(i), makeLinksLi);
	};

	$('#autoFill').on('click', function() {
	        $.each(json, function(key, value) {
	            var id = Math.floor(Math.random(key)*100000001);
	            localStorage.setItem(id, JSON.stringify(value));
	            window.location.reload();
	        })
	        // END .each 'json'
    });
    // END #autoFill.on 'click'

	$('#clearAll').on('click', function() {
		localStorage.clear();
		window.location.reload();
	});
});

var itemLinks = function(key, makeLinksLi) {
	var editAnchor = $('<a>Edit</a>').attr(
		  'href', '#add',
		  'id', 'editItem',
		  'key', key
		);
	$('#editItem').on('click', editItem);
	console.log(editAnchor);
	console.log(key);
	
	$(makeLinksLi).append(editAnchor)
				  .append('<br>')
				  ;

	var deleteAnchor = $('<a>Delete</a>').attr(
		  'href', '#',
		  'id', 'deleteItem',
		  'key', key
		);
	$('#deleteItem').on('click', deleteItem);
	$(makeLinksLi).append(deleteAnchor);
};

var editItem = function() {
	$('#addButton').attr('id', 'updateButton');
	var value = localStorage.getItem(this.key);
		item = JSON.parse(value);
	$('#updateButton').val('Update');
	$('#updateButton').on('click', storeData(this.key))
				   .attr('key', this.key)
				  ;
};

var deleteItem = function() {
	var ask = confirm("Are you sure you would like to delete this recipe?");
	if(ask) {
		localStorage.removeItem(this.key);
		window.location.reload();
	} else {
		alert("Recipe was not deleted");
	};
}; */
// ORIGINAL code
/* $('#add').on('pageinit', function() {
    
        var storeData = function(key) {
            // Check for already existent key.
            if (!key) {
                // Generate a random key number, assigning to id variable.
                var id = Math.floor(Math.random()*100000001);
            } else {
                // Overwrite data being edited.
                // Store new data with current key.
                id = key;
            }
            var item = $('form').serializeArray();
            localStorage.setItem(id, JSON.stringify(item));
        };
    $('#addButton').on('click', storeData);
    $('#cancelLink').on('click', function() {

    });
});

$('#view').on('pageinit', function() {
    for(i = 0, j = localStorage.length; i < j; i++) {
        var makeLi = $('<li>');
        var makeLinksLi = $('<li>');
        $('#itemsList').append(makeLi);
        var key = localStorage.key(i);
        console.log(key);
        var value = localStorage.getItem(key);
            console.log(value);
        var obj = JSON.parse(value);
            console.log(obj);
        var makeList = $('<ul>');
        $(makeLi).append(makeList);
        for(var l in obj) {
            console.log(obj[0].name);
            var makeSubLi = $('<li>');
            $(makeList).append(makeSubLi);
            var text = obj[l].name + ": " + obj[l].value;
            console.log(text.value);
            $(makeSubLi).html(text);
            $(makeList).append(makeLinksLi);
        };
    itemLinks(localStorage.key(i), makeLinksLi);
    };

    $('#autoFill').on('click', function() {
            $.each(json, function(key, value) {
                var id = Math.floor(Math.random(key)*100000001);
                localStorage.setItem(id, JSON.stringify(value));
                window.location.reload();
            });
            // END .each 'json'
    });
    // END #autoFill.on 'click'

    $('#clearAll').on('click', function() {
        localStorage.clear();
        window.location.reload();
    });
});

var itemLinks = function(key, makeLinksLi) {
    var editAnchor = $('<a>Edit</a>').attr(
          'href', '#add',
          'id', 'editItem',
          'key', key
        );
    $('#editItem').on('click', editItem);
    console.log(editAnchor);
    console.log(key);
    
    $(makeLinksLi).append(editAnchor)
                  .append('<br>')
                  ;

    var deleteAnchor = $('<a>Delete</a>').attr(
          'href', '#',
          'id', 'deleteItem',
          'key', key
        );
    $('#deleteItem').on('click', deleteItem);
    $(makeLinksLi).append(deleteAnchor);
};

var editItem = function() {
    $('#addButton').attr('id', 'updateButton');
    var value = localStorage.getItem(this.key);
    var item = JSON.parse(value);
    $('#updateButton').val('Update');
    $('#updateButton').on('click', storeData(this.key))
                   .attr('key', this.key)
                  ;
};

var deleteItem = function() {
    var ask = confirm("Are you sure you would like to delete this recipe?");
    if(ask) {
        localStorage.removeItem(this.key);
        window.location.reload();
    } else {
        alert("Recipe was not deleted");
    };
}; */



// JS HERO edited code
$('#add').on('pageinit', function() {    
    var storeData = function(key) {
        // Check for already existent key.
        if (!key) {
            // Generate a random key number, assigning to id variable.
            var id = Math.floor(Math.random()*100000001);
        } else {
            // Overwrite data being edited.
            // Store new data with current key.
            id = key;
        };
        var item = $('form').serializeArray();
        localStorage.setItem(id, JSON.stringify(item));
    };
    $('#addButton').on('click', storeData());
    $('#cancelLink').on('click', function() {

    });
});

$('#view').on('pageinit', function(itemLinks) {
    for(i = 0, j = localStorage.length; i < j; i++) {
        var makeLi = $('<li>');
        var makeLinksLi = $('<li>');
        $('#itemsList').append(makeLi);
        var key = localStorage.key(i);
        console.log(key);
        var value = localStorage.getItem(key);
            console.log(value);
        var obj = JSON.parse(value);
            console.log(obj);
        var makeList = $('<ul>');
        $(makeLi).append(makeList);
        for(var l in obj) {
            console.log(obj[0].name);
            var makeSubLi = $('<li>');
            $(makeList).append(makeSubLi);
            var text = obj[l].name + ": " + obj[l].value;
            console.log(text.value);
            $(makeSubLi).html(text);
            $(makeList).append(makeLinksLi);
        };
    itemLinks(localStorage.key(i), makeLinksLi);
    };

    $('#autoFill').on('click', function() {
            $.each('json', function(key, value) {
                var id = Math.floor(Math.random(key)*100000001);
                localStorage.setItem(id, JSON.stringify(value));
                window.location.reload();
            });
            // END .each 'json'
    });
    // END #autoFill.on 'click'

    $('#clearAll').on('click', function() {
        localStorage.clear();
        window.location.reload();
    });
});

var itemLinks = function(key, makeLinksLi, editItem, deleteItem) {
    var editAnchor = $('<a>Edit</a>').attr(
          'href', '#add',
          'id', 'editItem',
          'key', key
        );
    $('#editItem').on('click', editItem());
    console.log(editAnchor);
    console.log(key);
    
    $(makeLinksLi).append(editAnchor)
                  .append('<br>')
                  ;

    var deleteAnchor = $('<a>Delete</a>').attr(
          'href', '#',
          'id', 'deleteItem',
          'key', key
        );
    $('#deleteItem').on('click', deleteItem());
    $(makeLinksLi).append(deleteAnchor);
};

var editItem = function(storeData) {
    $('#addButton').attr('id', 'updateButton');
    var value = localStorage.getItem(this.key);
    var item = JSON.parse(value);
    $('#updateButton').val('Update');
    $('#updateButton').on('click', storeData(this.key))
                   .attr('key', this.key)
                  ;
};

var deleteItem = function() {
    var ask = confirm("Are you sure you would like to delete this recipe?");
    if(ask) {
        localStorage.removeItem(this.key);
        window.location.reload();
    } else {
        alert("Recipe was not deleted");
    };
};
