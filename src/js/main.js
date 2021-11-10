$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000

    });
});

$('#demoDefaultSelection').ddslick({
    defaultSelectedIndex:2
});



$('.mobile-btn').on('click', function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__nav').toggleClass('show-header__nav');
    $('.header__link').toggleClass('show-header__link');
});


$('.menu a nav').on('click', function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__nav').removeClass('show-header__nav');
    $('.header__link').removeClass('show-header__link');
});
