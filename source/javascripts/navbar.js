(function ($) {
  $(document).ready(function(){
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.navbar').removeClass('navbar-inverse');
        $('.navbar').addClass('navbar-default');
      }
      else {
        $('.navbar').addClass('navbar-inverse');
        $('.navbar').removeClass('navbar-default');
        }

    });


  });

});
  }(jQuery));



