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
        console.log(localStorage.setItem(id, JSON.stringify(data)));

        event.preventDefault();    
    });
});

// END

$('#view').on('pageinit', function() {
    
//    $('#view').on('click', function() {

        $('<div>').attr('id', 'items')
                  .appendTo('#view > section')
                 ;
        var recipes = $('<ul>');
        $(recipes).appendTo('#items');
        console.log(localStorage);
        console.log(localStorage.name);
        $.each(localStorage, function(key, value) {
            var currentKey = key;
            console.log(currentKey);
            var Li = $('<li>Recipe</li>');
            $(Li).appendTo(recipes);
            var subList = $('<ul>');
            $(subList).appendTo(Li);
            var LinksLi = $('<li><a id="editRcp" href="#add" data-key="currentKey">Edit</a></li><li><a id="deleteRcp" href="#" data-key="currentKey">Delete</a></li>')
                             .css('display', 'inline')
                            ;
            console.log(localStorage.length);
            console.log(key);
            console.log(value);
            console.log(this);
            console.log(value.name);
            console.log(value.value);
            console.log(value);
            var obj = JSON.parse(value);
            console.log(obj);
            $(obj).each(function(index, value) {
                var subLi = ('<li>' + value.name + ": " + value.value + '</li>');
                $(subLi).appendTo(subList);
                console.log(Element);
                console.log(index);
                console.log(this);
                console.log(value.name);
                console.log(value.value);
                $(LinksLi).appendTo(subList);
            });
        
        });

//    });
    // END #view.on 'click'

    /*$(editLinksLi).on('click', function() {
        var value = localStorage.getItem(key);
        
    });
    // END editLinksLi.on 'click' */

//    console.log(Key);
    $('#deleteRcp').on('click', function() {
        localStorage.removeItem(key);
        window.location.reload();
    });

    $(clearAll).on('click', function() {
           localStorage.clear(); 
        });
        // END #clearAll.on 'click'





    $('#editRcp').on('click', function(key) {
        // Allows individual recipes to be edited and updated.
        var currentKey = localStorage.getItem(key);
        console.log(currentKey);
    });
    // END editRcps.on


	/*$.getJSON('json', function(data) {

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

	});*/


});
// END view.on