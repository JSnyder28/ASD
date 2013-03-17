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
                  .appendTo('#view > section')
                 ;
        console.log(localStorage);
        console.log(localStorage.name);
        $.each(localStorage, function(key, value) {
            $('<ul>Recipe</ul>').appendTo('#items');
            console.log(localStorage.length);
            console.log(key);
            console.log(value);
            console.log(this);
            console.log(value.name);
            console.log(value.value);
            console.log(value);
            var obj = JSON.parse(value);
            console.log(obj);
            $(obj).each(function(index, Element) {
                $('<li>' + index + " " + this.name + ": " + this.value + '</li>')
                     .appendTo('#items > ul')
                    ;
                console.log(Element);
                console.log(index);
                console.log(this);
                console.log(this.name);
                console.log(this.value);
            });
/*            console.log(value);
            console.log(obj);
            console.log(obj[0].name);
            console.log(obj[0].value);
//            console.log(text);
            $('<ul>').appendTo('#items')
//                     .append('<li>')
                    ;
//            $('<li>').appendTo('#items > ul')
//                     .append('<ul>')
//                    ;
//            $('<li>').appendTo('#items > ul > li > ul');
//            console.log(this);
            $.each(obj, function(i, val) {
                $('<li>').append(val.name + ": " + val.value)
                        .appendTo('#items > ul')
                        ;
                console.log(i);
                console.log(val);
    //                console.log(val.name);
//                console.log(val.value);
                console.log(this.name + ": " + this.value);
                console.log(this);
            });                                             */
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