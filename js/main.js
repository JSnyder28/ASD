// Joshua Snyder
// ASD 1305
// Project Week 2


$('#home').on('pageinit', function() {
    $('#jsonData').on('click', function() {
        // When JSON button is clicked
        $.getJSON('xhr/list.js', function(data) {
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

    $('#xmlData').on('click', function() {
        // When XML button is clicked
        $('#view > section').load('xhr/list.xml', function(data, status) {
        });
    });
});
// END #home 'pageinit'

$('#add').on('pageinit', function() {
    $('form').on('submit', function() {
        var editKey = $('#addButton').data('key');
        if(!editKey) {
            var id = Math.floor(Math.random()*100000001);
        } else {
            id = editKey;
        };
        var data = $(this).serializeArray();
        localStorage.setItem(id, JSON.stringify(data));
        window.location.reload();
    });
});
// END #add 'pageinit'

$('#view').on('pageinit', function() {
    $.each(localStorage, function(key, value) {
        var parArr = JSON.parse(value);
        $('#displayDiv').append('<ul>Recipe: ' + key + '</ul>');
        for(var l in parArr) {
            $('<li>' + parArr[l].name + ": " + parArr[l].value + '</li>'
             ).appendTo('#displayDiv')
            ;
        };
        $('#displayDiv').append('<li>' + 
                                    '<a href="#add" class="edit" data-key="'+ key +'">Edit</a>' + 
                                '</li>'
                                );
        
        $('#displayDiv').append('<li>' + 
                                    '<a href="#" class="delete" data-key="'+ key +'">Delete</a>' + 
                                '</li>'
                                );
    });

    $('.edit').on('click', function() {
        var editKey = $(this).data('key');
        $('#addButton').attr('data-key', editKey);
            var value = localStorage.getItem(editKey);
            var items = JSON.parse(value);
            // console.log(items);
            $('.class option').attr('selected', "selected");
            $('#text-1').val(items[1].value);
            $('#textArea-1').val(items[2].value);
            $('#textArea-2').val(items[3].value);
            $('#slider').val(items[5].value);
            console.log(items[4].value);
            if(items[4].value === "Yes" || "on") {
                $('.checkbox').prop('checked', true);
                // console.log(true);
            } else {
                $('.checkbox').prop('checked', false);
            };
            $('#slider').val(items[5].value);
    });

    $('.delete').on('click', function() {
       var deleteKey = $(this).data('key');
       console.log(deleteKey);
       localStorage.removeItem(deleteKey);
       window.location.reload();
    });

    $('#autoFill').on('click', function() {
        for (var n in json) {
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        };
            window.location.reload();
    });

    $('#clearAll').on('click', function() {
        localStorage.clear();
        window.location.reload();
    });
});
// END #view 'pageinit'
