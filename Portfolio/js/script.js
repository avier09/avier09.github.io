// script.js

//notification bar
$(function () {
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
    
    // mouse over icons
    
        //Home Icon
    $('#home img').mouseover(function () {
      $(this).attr("src", "../images/icons/home_blue.png")
  });
    $('#home img').mouseout(function () {
      $(this).attr("src", "../images/icons/home_logo.png")
  });
    
       //email Icon
    $('#email img').mouseover(function () {
      $(this).attr("src", "../images/icons/email_blue.png")
  });
    $('#email img').mouseout(function () {
      $(this).attr("src", "../images/icons/email_logo.png")
  });
    
       //portfolio Icon
    $('#portfolio img').mouseover(function () {
      $(this).attr("src", "../images/icons/portfolio_blue.png")
  });
    $('#portfolio img').mouseout(function () {
      $(this).attr("src", "../images/icons/portfolio_icon.png")
  });
    
       //user Icon
    $('#user img').mouseover(function () {
      $(this).attr("src", "../images/icons/user_blue.png")
  });
    $('#user img').mouseout(function () {
      $(this).attr("src", "../images/icons/user_icon.png")
  });
    
       //download Icon
    $('#download img').mouseover(function () {
      $(this).attr("src", "../images/icons/download_blue.png")
  });
    $('#download img').mouseout(function () {
      $(this).attr("src", "../images/icons/download_icon.png")
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