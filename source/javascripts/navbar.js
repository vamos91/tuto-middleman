(function ($) {
  $(document).ready(function(){

  //hide .navbar first
  //$(".navbar-sup").fadeTo( "fast", 1 );

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(this).scrollTop() > 100) {
        $('.navbar-sup').slideUp();
      }
      if ($(this).scrollTop() < 100) {
        $('.navbar-sup').slideDown();
        }

    });


  });

});
  }(jQuery));
// below will control the scrollspy



