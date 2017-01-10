$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
           $('.back-to-top').fadeIn();
       } else {
           $('.back-to-top').fadeOut();
       }
   });
   // scroll body to 0px on click
   $('.back-to-top').click(function () {
       $('.back-to-top').tooltip('hide');
       $('body,html').animate({
           scrollTop: 0
       }, 500);
       return false;
   });

   $('.back-to-top').tooltip('show');
 });

 $(document).on('click', 'a', function(event){
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $( $.attr(this, 'href') ).offset().top
     }, 500);
 });
