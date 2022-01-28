// suggestion slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".sliderNext",
        prevEl: ".sliderPrev",
    },
});


// mobile menu
//======================
$('#menuToggler').on('click', function (e) {
    e.preventDefault();
    $('#left-sidebar').slideToggle();
});

// suggestion Toggler
$('#suggestionToggler').on('click', function (e) {
    e.preventDefault();
    $('#right-sidebar').slideToggle();
});