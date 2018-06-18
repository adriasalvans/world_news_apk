

let loadFunc = function() {

    if ($(document).width() < 500) {
      $('#sub_title').hide();}
    else {
      $('#sub_title').show();}
   
  }


$(window).resize(loadFunc);
$(document).ready(loadFunc);




$(function() {
  loadFunc();
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1)+']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800); // the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});