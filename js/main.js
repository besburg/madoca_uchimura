$(document).ready(function () {
    //ロードされたらハンバーガーメニューを隠す。
    $('.menu-container .menu').hide();
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.mix', {
        direction: 'vertical',
        effect: 'slide',
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        mousewheel: {
            invert: false,
        },
        observer: true,
        observeParents: true,
        // freeMode: true
    })
});
$(function(){
    $('.portrait-click').on('click',function(){
        $('.mix').hide();
        $('.landscape').hide();
        $('.portrait').show();
        const mySwiper2 = new Swiper ('.portrait', {
            direction: 'vertical',
            effect: 'slide',
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            mousewheel: {
                invert: false,
            },
            observer: true,
            observeParents: true,
            // freeMode: true
        })
        mySwiper2.update();
        
    })
    
    $('.landscape-click').on('click',function(){
        $('.mix').hide();
        $('.portrait').hide();
        $('.landscape').show();
        var mySwiper3 = new Swiper ('.landscape', {
            direction: 'vertical',
            effect: 'slide',
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            mousewheel: {
                invert: false,
            },
            observer: true,
            observeParents: true,
            // freeMode: true
        })
        mySwiper3.update();
    })

    //以下ハンバーガーメニューアイコン変化
    $('.menu-trigger').click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
          }else{
            $(this).addClass("active");
        }
    })

    //以下ハンバーガーメニュースライド
    $('.menu-trigger').on('click', function() {
        if($('.menu-container .menu').css('display') === 'block') {
            // console.log("aaaa");
            $('.menu-container .menu').slideUp('1500');
        }else {
            $('.menu-container .menu').slideDown('1500');
        }
    });
})