$(document).ready(function () {

    /* Slider */
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
        slidesToScroll: 1
    });

    /* Menu */
    const hamburger = $('.hamburger');
    const menu = $('.header__nav-list');
    const menu_links = $('.nav__link');

    hamburger.on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        menu.toggle('slow');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        e.preventDefault;
        if (!$('.hamburger').is('.hamburger_active')) {
            return;
        }
        if (!menu.is(e.target) // если клик был не по нашему блоку
            && menu.has(e.target).length === 0 // и не по его дочерним элементам
            && !hamburger.is(e.target) // не по контейнеру кнопки меню
            && hamburger.has(e.target).length === 0 // и не по его дочерним элементам
            || menu_links.is(e.target)) { // или при клике по якорям
            menu.hide(); // то скрываем меню
            hamburger.removeClass('hamburger_active'); // и возвращаем кнопке меню класс по дефолту
        }
    });
    
});

