// Joshua Snyder
// ASD 1303
// Project Week 1

	
$('#home').on('pageinit', function() {

});
// END

$('#add').on('pageinit', function() {
    // When the add recipe page is ready, run this code.
    
    $('#addIt').on('click', function(event) {

        var data    = $('form').serializeArray();
        var id      = Math.floor(Math.random()*100000001);
        //console.log(data);
        //console.log(id);
        localStorage.setItem(id, JSON.stringify(data));
        //console.log(data);

        event.preventDefault();    
    });
});

// END

$('#view').on('pageinit', function() {
    
    $('#view').on('click', function() {

    	$.each(localStorage, function(key, value) {
    		console.log(key);
    		console.log(value);
    		var value = localStorage.getItem(key);
    		var obj = JSON.parse(value);
    		$('<ul>').appendTo('#view > section');
    		console.log(value);
    		console.log(obj);
    		console.log(obj[0].name);
    		console.log(obj[0].value);
    		$.each(obj, function(index, value) {
    			$('<li>').appendTo('#view > section > ul')
    			.append(value.name + ": " + value.value)
    		;
    			console.log(obj);
    			console.log(index);
    			console.log(value);
    			console.log(value.name);
    			console.log(value.value);
    			//$.each(value, function(index, value) {
    			//	console.log(index);
    			//	console.log(value[0]);
    			//});
    		});
    	});


    });






    $('editRcps').on('click', function() {
        // Allows individual recipes to be edited and updated.
    });
    // END editRcps.on


    	$.getJSON('json', function(data) {

    		var items = [];

    		$.each(data, function(key, val) {
    			items.push('<li id="' + key + '">' + val + '</li>');

    		});

    		$('<ul/>', {
    			'class' : 'recipes-list',
    			html: items.join('')
    		}).appendTo('#view > section');
    		//console.log(data);
    		//console.log(items);

    	});


});
// END view.on