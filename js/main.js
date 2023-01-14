$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 120) {
            $(".header").addClass("animate");
                } else {
            $(".header").removeClass("animate");
        }
    });

    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });  
});