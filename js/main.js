$(window).on('load', function () {
    let preloader = $('#loading');
    let svg_anm = preloader.find('.svgAnm');
    svg_anm.fadeOut();
    preloader.delay(500).fadeOut('slow');
});

$(function () {
    $(window).on("scroll", function () {
        let icon = $("#checkbox3").prop("checked");
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
            navMenu.css("box-shadow", "0 2px 20px 0 rgba(0, 0, 0, 0.5), 0 2px 20px 0 rgba(0, 0, 0, 0.6)");
        } else if ($(window).scrollTop() <= 15 && icon === true) {
            navMenu.addClass("activeHead");
            logo.stop().animate({
                height: '104.150px',
                width: '150px',
            }, 500);
        } else {
            navMenu.removeClass("activeHead");
            navMenu.addClass("noneActive");
            navLink.css("color", "whitesmoke");
            logo.stop().animate({
                height: '104.150px',
                width: '150px',
            }, 500);
            navMenu.css("box-shadow", "none");
        }
    });
});

$("#checkbox3").on("click", function () {
    const navMenu = $(".navigation-menu");
    let icon = $("#checkbox3").prop("checked");
    if (icon === true) {
        navMenu.removeClass("noneActive");
        navMenu.addClass("activeHead"); //navMenu.css("background-color", "");
        navMenu.css("box-shadow", "0 2px 20px 0 rgba(0, 0, 0, 0.5), 0 2px 20px 0 rgba(0, 0, 0, 0.6)");
    } else {
        navMenu.removeClass("activeHead");
        navMenu.addClass("noneActive"); //navMenu.css("background-color", "transparent");
        navMenu.css("box-shadow", "none");
    }
});

