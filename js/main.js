// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 3,
    startPosition: 1,
    responsive : {
        460: {
            items: 2,
            startPosition: 0,
        },
        850 : {
            margin: 20,
            items: 2,
            startPosition: 1,
        },
        1000 : {
            margin: 20,
            items: 3,
        },
        1200: {
            margin: 30,
        },
    },
});

$('.slider-btn-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Carousel END

// Nav Icon
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-toggle');
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('.no-scroll');
}

// Nav Icon END