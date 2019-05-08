// Slick slider.

$(document).ready(function () {
    $('.slider__box').on('init', function (event, slick) {
        var $items = slick.$dots.find('li');
        $items.addClass('transparent-circle');
        $items.find('button').remove();
    });

    $('.slider__box').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        dotsClass: 'slider__dots',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
});

