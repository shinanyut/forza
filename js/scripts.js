$(document).ready(function() {
      $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });

    if ( $('.bxslider').length > 0 ) {
        
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1900,
          adaptiveHeightSpeed: 520,
          responsive: true
        });
    }
});

$(window).load(function() {

});