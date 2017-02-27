// script.js
$(function () {
    $('.notification-bar').delay(1000).slideDown().delay(5000).slideUp();
    // TO DO LIST
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    $(window).scroll(function () {
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
  });
    var img = document.getElementById('.pic').firstChild;
img.onload = function() {
    if(img.height > img.width) {
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
