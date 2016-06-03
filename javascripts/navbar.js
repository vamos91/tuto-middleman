(function ($) {
  $(document).ready(function(){

  //hide .navbar first
  //$(".navbar-sup").fadeTo( "fast", 1 );

  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(this).scrollTop() > 100) {
        $('.navbar-sup').hide();
      }
      if ($(this).scrollTop() < 100) {
        $('.navbar-sup').fadeIn();
        }

    });


  });

});
  }(jQuery));
// below will control the scrollspy
;
