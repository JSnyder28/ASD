// Joshua Snyder
// ASD 1303
// Project Week 1

	
$('#home').on('pageinit', function() {

});
// END

$('#add').on('pageinit', function() {
    // When the add recipe page is ready, run this code.
    
    $('form').on('click', function(event) {

        var data     = $(this).serializeArray();
        var id       = Math.floor(Math.random()*100000001);
        console.log(data);
        console.log(id);
        localStorage.setItem(id, JSON.stringify(data));
        console.log(data);

        event.preventDefault();    
    });
});

// END

$('#view').on('pageinit', function() {
    
    $('#view').on('click', function() {

        $(localStorage).each(function(){

            $('<ul>').appendTo('#view > section');

            var key = localStorage.key($(this));           
            var value = localStorage.getItem(key);           
            var recipes = jQuery.parseJSON(value);
           
            console.log(key);
            console.log(value);
            console.log(recipes);

            $(recipes).each(function() {

                $('<li>').append(jQuery.type([]))
                        .appendTo('#view > section > ul')

                ;


            });

        });

    });






    $('editRcps').on('click', function() {
        // Allows individual recipes to be edited and updated.
    });
});
// END