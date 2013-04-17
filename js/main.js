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
            /* var LinksLi = $('<li data-key="'+ currentKey +'"><a id="editRcp" href="#">Edit</a></li><li data-key="'+ currentKey +'"><a id="deleteRcp" href="#">Delete</a></li>')
                             .css('display', 'inline')
                            ; */
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
                // $(LinksLi).appendTo(subList);
            });
        itemLinks(key, subList);

        });

    $('#deleteRcp').on('click', function() {
        var anchors = $('[data-key]');
        console.log(anchors);
        //localStorage.removeItem(this.key);
        //window.location.reload();
    });


    $('#clearAll').on('click', function() {
           localStorage.clear();
           window.location.reload();
        });
        // END #clearAll.on 'click'


    $('#editRcp').on('click', function() {
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
// END view.on 'pageinit'

var itemLinks = function (key, subList) {
    console.log(key);
    var editItemLi      = $('<li>')
                            .css('display', 'inline')
                        ;
                        // Displays the link inline with the delete link.
    console.log(editItemLi);
    var editItemAnchor  = $('<a>')
                            .attr({
                             "href" : "#",
                             "data-key" : key
                            })
                            .html('Edit')
                        ;
                        // Sets the href and data-key attributes to the anchor.
    console.log(editItemAnchor);
    // Creates the list items, and anchors for edit links.
    $(editItemLi).appendTo(subList);
    console.log(subList);
    $(editItemAnchor).appendTo(editItemLi);
    // Appends list items to the subList created in the local storage .each loop, and appends the anchors to the list items.


    var deleteItemLi       = $('<li>')
                               .css('display', 'inline')
                           ;
                           // Displays the link inline with the edit link.
    console.log(deleteItemLi);
    var deleteItemAnchor   = $('<a>')
                               .attr({
                                "href" : "#",
                                "data-key" : key
                               })
                               .html('Delete')
                           ;
                           // Sets the href and data-key attributes to the anchor.
    console.log(deleteItemAnchor);
    // Creates the list items, and anchors for the delete links.
    $(deleteItemLi).appendTo(subList);
    $(deleteItemAnchor).appendTo(deleteItemLi);
    // Appends list items to the subList created in the local storage .each loop, and appends the anchors to the list items.

};
// END itemLinks function




