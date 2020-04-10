const mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 300000,
    },
    mousewheel: {
        invert: false,
    },
})

const mySwiper2 = new Swiper ('.swiper-container2', {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    mousewheel: {
        invert: false,
    },
})

const mySwiper3 = new Swiper ('.swiper-container3', {
    direction: 'vertical',
    effect: 'slide',
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    mousewheel: {
        invert: false,
    },
})

// $('.portrait').on('click',function(){
//     mySwiper.slideTo(0, 100);
//     })
    
$(function(){
    $('.swiper-container2').hide();
    $('.swiper-container3').hide();
    $('.portrait-click').on('click',function(){
        $('.swiper-container').hide();
        $('.swiper-container3').hide();
        $('.swiper-container2').show();
        mySwiper2.slideTo(0, 100);
    })
    $('.landscape-click').on('click',function(){
        $('.swiper-container').hide();
        $('.swiper-container2').hide();
        $('.swiper-container3').show();
        mySwiper3.slideTo(0, 100);
    })
})