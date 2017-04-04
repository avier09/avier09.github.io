// script.js
$(document).ready(function () {

    $('#construction').modal('show');

});

$(function(){
// Set the date we're counting down to
var countDownDate = new Date("July 22, 2017 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="wedding_date"
    document.getElementById("wedding_date").innerHTML = days + " days, " + hours + " hours, "
    + minutes + " minutes, & " + seconds + " seconds ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("wedding_date").innerHTML = "EXPIRED";
    }
}, 1000);

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