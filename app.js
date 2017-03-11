var count = 0;
$(document).ready(function(){

  //function boxRemove() {
    $(".containers").on("click", ".box", function() {
    ///pull the element value of color: data-color = 'red'
    var color = $(this).data('color');
    console.log('color' + color);
    var count = $('#' + color + 'Count').text();
    count--;
    $("#" + color + "Count").text(count);
    $(this).remove();
  });
//  }

  $(".containers").append("<button data-color='red' >Red</button>");
  $(".containers").append("<button data-color='blue' >Blue</button>");
  $(".containers").append("<button data-color='green' >Green</button>");
  $(".containers").append("<button data-color='yellow' >Yellow</button>");
  $(".containers").append("<p></p>");

  $(".containers").on("click", "button", function() {
    var color = $(this).data('color');

    //console.log($(this).data('color'));
    $(".containers").append("<div data-color='" + color + "' class='box " + color + "' > </div>");
    //var currentCount = parseInt($('#' + color + 'Count').text());
    var count = $('#' + color + 'Count').text();
    count++;
    $("#" + color + "Count").text(count);


    });

});
