var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 8000,
    },
    mousewheel: {
        invert: false,
    },
})