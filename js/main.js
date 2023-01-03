$(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 120) {
            $(".header").addClass("animate");
                } else {
            $(".header").removeClass("animate");
        }
    });
});