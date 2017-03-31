// script.js
$(document).ready(function () {

    $('#construction').modal('show');

});
$(function(){


//notification bar
    $('.notification-bar').delay(3000).slideDown().delay(5000).slideUp();
    // TO DO LIST
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });

    
    //top doesn't scroll
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });



    //Hides the Tech Icons until scroll
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var wait = 0;
            if (bottom_of_window > bottom_of_object) {
                $('.hideme:lt(9)').each(function () {
                    $(this).delay(wait).animate({
                        'opacity': '1'
                    }, 500);
                    wait += 250;
                });

            }
            
        });
        
    });
    
    

    


    var img = document.getElementById('.pic').firstChild;
    img.onload = function () {
        if (img.height > img.width) {
            img.height = '100%';
            img.width = 'auto';
        }
    };

    $('input').keydown(function (e) {
        if (e.keyCode == 13) {
            var item = $(this).val();

            $(this).parent().parent().append('<li>' + item + '<span class="x">' + "x" + '</span>' + '</li>');
            $(this).val('');
        }
    });

    $(".x").click(function () {
        $(this).parent().hide('slow');
    });

    $('#trash').droppable({
        drop: function (event, ui) {
            ui.draggable.remove();
        }
    });

});