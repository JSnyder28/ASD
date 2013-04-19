// Joshua Snyder
// ASD 1304
// Project Week 1

	
$('#home').on('pageinit', function() {
    $('a.json').on('click', function() {
        $.ajax({
                url : "ajax_json.js",
                type : "GET",
                dataType : "json",
                success : function(data, status) {
                    console.log(status, data)    
                }});
    });
    // END a.json.on 'click'

    /* $('a.xml').on('click', function() {
        $.ajax({
                url : "ajax_xml.xml",
                type : "GET",
                dataType : "xml",
                success : function(data, status) {
                    console.log(status, data)
                }});
    });
    // END a.xml.on 'click'
    var data    = $.parseXML(ajax_xml);
        recipes = $(data);
    recipes.find("items").each(function() {
        var item = $(this);
    }); */
});
// END #home.on 'pageinit'

$('#add').on('pageinit', function() {
    // When the add recipe page is ready, run this code.
    $('#addIt').on('click', function(event) {
        var data    = $('form').serializeArray();
        var id      = Math.floor(Math.random()*100000001);
        localStorage.setItem(id, JSON.stringify(data));

        event.preventDefault();
    });
    // END #addIt.on 'click'

});
// END #add.on 'pageinit'

$('#view').on('pageinit', function() {
    $('<div>').attr('id', 'items')
              .appendTo('#view > section')
             ;
    var recipes = $('<ul>');
    $(recipes).appendTo('#items');
    $.each(localStorage, function(key, value) {
        var Li = $('<li>Recipe</li>');
        $(Li).appendTo(recipes);
        var subList = $('<ul>');
        $(subList).appendTo(Li);
        var obj = JSON.parse(value);
        $(obj).each(function(index, value) {
            var subLi = ('<li>' + value.name + ": " + value.value + '</li>');
            $(subLi).appendTo(subList);
        });
        // END 'obj' .each
    itemLinks(key, value, subList);
    });
    // END .each 'localStorage'
    
    $('#autoFill').on('click', function() {
        $.each(json, function(key, value) {
            var id = Math.floor(Math.random(key)*100000001);
            localStorage.setItem(id, JSON.stringify(value));
            var jsonObj = value;
            $.each(jsonObj, function(index, value) {
            });
            // END .each 'jsonObj'
        });
        // END .each 'json'
    });
    // END #autoFill.on 'click'

    $('#clearAll').on('click', function() {
           localStorage.clear();
           window.location.reload();
    });
    // END #clearAll.on 'click'

});
// END view.on 'pageinit'

var itemLinks = function (key, value, subList) {
    var editItemLi      = $('<li>')
                            .css('display', 'inline')
                        ;
                        // Displays the link inline with the delete link.
    var editItemAnchor  = $('<a>')
                            .attr({
                             "href" : "#add",
                             "data-key" : key
                            })
                            .html('Edit')
                        ;
                        // Sets the href and data-key attributes to the anchor.
    // Creates the list items, and anchors for edit links.
    $(editItemLi).appendTo(subList);
    $(editItemAnchor).appendTo(editItemLi);
    // Appends list items to the subList created in the local storage .each loop, and appends the anchors to the list items.
    
    $(editItemAnchor).on('click', function() {
        $('#add header > h1').html("Edit Recipe");
        $('#addIt')
          .val('Update')
          .attr('id', 'updateIt');
          ;
        var obj = JSON.parse(value);
        $('#selectChoice1').val('option:selected');
        $('#rcpName').val(obj[1].value);
        $('#txtArea-A').val(obj[2].value);
        $('#txtArea-B').val(obj[3].value);
        $('#slider').val(obj[4].value);
        $('#checkboxFav').attr('checked');
        
        $('#updateIt').on('click', function() {
            var data = $('form').serializeArray();
            localStorage.setItem(key, JSON.stringify(data));
            alert("Your recipe has been updated");
        });
        // END #updateIt.on 'click'
    });
    //END #editItemAnchor.on 'click'

    var deleteItemLi       = $('<li>')
                               .css('display', 'inline')
                           ;
                           // Displays the link inline with the edit link.
    var deleteItemAnchor   = $('<a>')
                               .attr({
                                "href" : "#",
                                "data-key" : key
                               })
                               .html('Delete')
                           ;
                           // Sets the href and data-key attributes to the anchor.
    // Creates the list items, and anchors for the delete links.
    $(deleteItemLi).appendTo(subList);
    $(deleteItemAnchor).appendTo(deleteItemLi);
    // Appends list items to the subList created in the local storage .each loop, and appends the anchors to the list items.
    
    $(deleteItemAnchor).on('click', function() {
        var ask = confirm("Are you sure you would like to delete this recipe?");
        if (ask) {
            localStorage.removeItem(key);
            alert("Recipe has been deleted");
        } else {
            alert("Recipe was not deleted");
        };
        // END if
    });
    // END #deleteItemAnchor.on 'click'

};
// END itemLinks function




