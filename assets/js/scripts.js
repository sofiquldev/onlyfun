(function ($) {
    'use strict';

    // facts number counter up
    $('.fact-counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Partner logo slider
    $('.partners-logo').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })


    // Testimonial slider
    $('.test-caro').owlCarousel({
        autoplay: true,
        loop: true,
        responsiveClass: true,
        items: 1
    })

    //======================
    // Mobile menu 
    //======================
    $('#menu-toggler').on('click', function (e) {
        e.preventDefault();
        $('.navbar-nav').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown ti-angle-down"></i>');

    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function () {
            $(this).prev().slideToggle();
            $(this).toggleClass('ti-angle-down ti-angle-up')
        })
    }


    // skity menubar
    // let header = document.querySelector('.header')

    window.onscroll = function() {
    if(window.pageYOffset > 200) {
        $('.header').addClass('fixed-header')
    } else {
        $('.header').removeClass('fixed-header')
    }
    }

})(jQuery);