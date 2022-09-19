// CLONE BY ORUJ SHARIFLI
console.log("CLONE BY ORUJ SHARIFLI")

// Preloader
$(window).on('load', function () {
    $('.preloader img').fadeOut();
    $('.preloader').delay(400).fadeOut();
});

// Scroll Back To Top Button, opacity effect and navbar fixed
$(window).scroll(function () {
    if ($(this).scrollTop() >= 20) {
        $('.go-to-top').fadeIn(200);
    }
    else {
        $('.go-to-top').fadeOut(200);
    }
});
$('.go-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

// aos animate
AOS.init();

// Do not repeat the aos animation when scrolling again
window.addEventListener('scroll', function () {
    x = document.querySelectorAll(".aos-init");
    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains('aos-animate')) {
            x[i].dataset.aos = '';
        }
    }
})

// hamburger menu icon
const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".mobile-menu");

// click hamburger menu icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navMenu.classList.toggle("active");
})

// when clicking outside the area
$(".mobile-menu").click(function (event) {
    if ($(event.target).is(this)) {
        $(this).removeClass("active")
        $(".menu-icon").removeClass("change")
    }
})

// when clicking x-mark for closing menu mobile
$(".x-mark").click(function () {
    $(".mobile-menu").removeClass("active")
    $(".menu-icon").removeClass("change")
})

/* SITE BY ORUJ SHARIFLI */


$(".category-wr").mouseover(function () {
    $(".category-body").show();
});
$(".category-wr").mouseleave(function () {
    $(".category-body").hide();
});
$(".category-list-item").hover(function () {
    $(this).next(".category-list-dropdown").toggleClass("active");
});
$(".category-list-dropdown").hover(function () {
    $(this).toggleClass("active");
});

$(".mobile-category-heading").click(function () {
    $(".mobile-category-body").stop(true, false, true).toggleClass("active");
    $(".mobile-category-head").stop(true, false, true).toggleClass("bordered");
});
$(".category-item-arrow").click(function () {
    $(this).toggleClass("rotate");
    $(this).parent().toggleClass("active");
});

$(document).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.header-on-scroll').show();
    } else {
        $('.header-on-scroll').hide();
    }
});