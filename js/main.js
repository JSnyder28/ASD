// Joshua Snyder
// ASD 1304
// Project Week 1

	
$('#home').on('pageinit', function() {
    // When home page is ready
    $('#jsonData').on('click', function() {
        // When JSON button is clicked
        /* $.ajax({
            url: 'xhr/list.js',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log(response);
            }
        }); */
        $.getJSON('xhr/list.js', function(data) {
            console.log(data.Recipes[1].Category);
            for (var i = 0, len = data.Recipes.length; i < len; i++) {
                var arr = data.Recipes[i];
                $(''+'<div>'
                        +'<h4>' + arr.Name + '</h4>'
                        +'<ul>' + arr.Category
                            +'<li>' + arr.Directions + '</li>'
                            +'<li>' + arr.Ingredients + '</li>'
                            +'<li>' + arr.Favorite + '</li>'
                            +'<li>' + arr.Rating + '</li>'
                        +'</ul>'
                    +'</div>'
                 )
                  .appendTo('#view > section')
                ;
            };
        });
    });
    // END jsonData.on 'click'

    $('#xmlData').on('click', function() {
        // When XML button is clicked
        /* $.ajax({
            url: "ajax_xml.xml",
            type: "GET",
            dataType: "json",
            success: function(response) {
                console.log(response);
            }
        }); */
        /* xmlhttp=new XMLHttpRequest();
        if (window.XMLHttpRequest) {
            xmlhttp=new XMLHttpRequest();
        } else {
            xmlhttp=new ActiveXObject ('Microsoft.XMLHTTP');
        };
        xmlhttp.open('GET', 'xhr/list.xml', false);
        xmlhttp.send();
        xmlDoc=xmlhttp.responseXML; */
        $('#view > section').load('xhr/list.xml', function(data, status) {
            console.log(data, status);
        });
    });
    // END xmlData.on 'click'
});
// END #home.on 'pageinit'

$('#add').on('pageinit', function() {
    // When add recipe page is ready
    $('#addIt').on('click', function(event) {
        // When add it button is clicked
        var data    = $('form').serializeArray();
        var id      = Math.floor(Math.random()*100000001);
        localStorage.setItem(id, JSON.stringify(data));
        // Stores the form information to local storage with a key and value. Key is id, generated through math.random. Value is serialized form data.
        /* event.preventDefault();
        // Prevents loading of homepage when add it button is clicked. Development use only. */
    });
    // END #addIt.on 'click'

    $('#updateIt').on('click', function() {
        // When update it button is clicked
        // Update it is originally add it button. Value changed for editing item purposes.
        var data = $('form').serializeArray();
            id   = $('[data-key]').val();
        localStorage.setItem(id, JSON.stringify(data));
        // Save new info to same local storage key. data-key val assigned during item links creation.
        alert("Your recipe has been updated");
    });
    // END #updateIt.on 'click'
    
    $('#cancelIt').on('click', function() {
        window.location.reload();
    });
    // END #cancelIt.on 'click'

});
// END #add.on 'pageinit'

$('#view').on('pageinit', function() {
    // When view page is ready
    $('<div>').attr('id', 'items')
              .appendTo('#view > section')
             ;
             // Create div, give it an id of items, append it to the view page section tag.
    var recipes = $('<ul>');
    $(recipes).appendTo('#items');
    // Create unordered list, append it to items div.
    $.each(localStorage, function(key, value) {
        // For each item in local storage.
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
        });
        // END .each 'json'
        window.location.reload();
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
        // When edit link is clicked
        $('#add header > h1').html("Edit Recipe");
        // Changes the title of the Add Recipe page to Edit Recipe.
        $('#addIt')
          .text('Update')
          .attr('id', 'updateIt');
          ;
          // Changes the value of addIt button for editing items, and gives it an id.
        var obj = JSON.parse(value);
        $('#selectChoice1 option:selected').val(obj[0].value);
        $('#rcpName').val(obj[1].value);
        $('#txtArea-A').val(obj[2].value);
        $('#txtArea-B').val(obj[3].value);
        $('#slider').val(obj[4].value);
        $('#checkboxFav').attr('checked');
        // Parse and populate the form fields with individual item info, from local storage.
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
        // When delete link is clicked
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




