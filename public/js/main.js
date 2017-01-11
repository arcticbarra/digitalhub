$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('select').material_select();
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

   var $form = $('form');
   $form.submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            console.log("message sent");
          },'json');
      $form.remove();
      $('.thanks').append('<p><strong>Gracias por realizar tu solicitud. !Nos pondremos en contacto contigo pronto!</strong></p>')
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
