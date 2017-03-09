
var onReady = function() {

    redClick();
    blueClick();
    greenClick();
    yellowClick();


};
var redCount =0;
var blueCount = 0;
var greenCount = 0;
var yellowCount = 0;
function redClick() {
  $('.buttonClick').on('click', '#red', function(){
    console.log('red');
     $('.boxContainer').append('<div class="redBox"></div>');
      redCount++;
      $('.redNumb').text('Red count: ' +redCount);
  });
}
function blueClick() {
  $('.buttonClick').on('click', '#blue', function(){
    console.log('blue');
     $('.boxContainer').append('<div class="blueBox"></div>');
      blueCount++;
      $('.blueNumb').text('Blue count: ' +blueCount);
  });
}
function greenClick() {
  $('.buttonClick').on('click', '#green', function(){
     $('.boxContainer').append('<div class="greenBox"></div>');
      greenCount++;
      $('.greenNumb').text('Green count: ' +greenCount);
  });
}
function yellowClick() {
  $('.buttonClick').on('click', '#yellow', function(){
     $('.boxContainer').append('<div class="yellowBox"></div>');
      yellowCount++;
      $('.yellowNumb').text('Yellow count: ' +yellowCount);
  });
}





$(document).ready(onReady);
