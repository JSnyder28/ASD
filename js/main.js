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

        /*$('<div>').attr('id', 'items')
                .appendTo('#view > section')
        ;
        $(localStorage).each(function(index) {
            console.log(this.length);
            console.log(index);
            console.log(localStorage.length);
        });*/

        /*$('<div>').attr('id', 'items')
                .appendTo('#view > section')
        ;
        $.each(localStorage, function(key, value) {
            $('<ul>').appendTo('#items');
            console.log(value);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);          
            console.log(value);
            console.log(obj[0].value);
            console.log(obj[1].value);
            $.each(obj, function(index, value) {
                $('<li>').appendTo('#items > ul');
                console.log(this.obj);
                console.log(this.index);
                console.log(this.value);
                console.log(value.name);
                console.log(value.value);
    			
    		});
    	});*/

        
        /*$.each(localStorage, function(key, value) {
            $('<div>').attr('id', 'items')
                .append('<ul>')
                .appendTo('#view > section')
            ;
            console.log(value);
            ;
            console.log(localStorage.getItem(key));
            $.each(JSON.parse(value), function(key, value) {
                $('<li>').append(value.name + ": " + value.value)
                    .appendTo('#items > ul')
                ;
                console.log(key);
                console.log(value.name + ": " + value.value);
            });
            
        });*/

        $('<div>').attr('id', 'items')
                .append('<ul>')
                .appendTo('#view > section')
            ;

        $.each(localStorage, function(key, value) {
            console.log(value);
            ;
            console.log(localStorage.getItem(key));
            $.each(JSON.parse(value), function(key, value) {
                $('<li>').css('list-style-type', 'none')
                    .append(value.name + ": " + value.value)
                    .appendTo('#items > ul');
                ;
                console.log(key);
                console.log(value.name + ": " + value.value);
            });
            
        });


    });






    $('editRcps').on('click', function() {
        // Allows individual recipes to be edited and updated.
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