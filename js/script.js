$(document).ready(function(){
    $('.slick-slider').slick({
        autoplay: true, autoplaySpeed: 5000, arrows: true,
        dots: true, fade: true
    });

    $('.popup').magnificPopup({ type: 'image', gallery: { enabled: true } });

    $('#contact-form').on('submit', function(e){
        e.preventDefault();
        alert('Thanks, '+ $('input[name=name]').val() +'! Message sent.');
        this.reset();
    });
});
