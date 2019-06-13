$(window).on('load', function () {
    let $preloader = $('#loading'),
        $svg_anm   = $preloader.find('.svgAnm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

$(function () {
    $(window).on("scroll", function () {
        const navMenu = $(".navigation-menu");
        const logo = $(".logo");
        const navLink = $(".nav-link");
        if ($(window).scrollTop() > 15) {
            navMenu.removeClass("noneActive");
            navMenu.addClass("activeHead");
            logo.stop().animate({
                height: '40px',
                width: '90px',
            }, 500);
            navMenu.css("box-shadow", "black 1px 4px 20px 0px")
        } else {
            navMenu.removeClass("activeHead");
            navMenu.addClass("noneActive");
            navLink.css("color", "whitesmoke");
            logo.stop().animate({
                height: '104.150px',
                width: '150px',
            }, 500);
            navMenu.css("box-shadow", "none")
        }
    });
});