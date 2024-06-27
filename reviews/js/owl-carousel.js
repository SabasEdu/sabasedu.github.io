/* Copyright © by Muhammad Erag Goshih, iErTA */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: [$('.owl-prev'),$('.owl-next')],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})