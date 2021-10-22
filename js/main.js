
$(document).ready(function () {

    /* ------------- Preloadere ------------*/
    $(window).on("load", function () {
        $(".preloader").fadeOut("slow");
    });

    /* ------------ Navbar Shrink ---------*/
    $(window).on("scroll", function () {

        if($(this).scrollTop() > 90) {

            $(".navbar").addClass("navbar-shrink");

        } else {

            $(".navbar").removeClass("navbar-shrink");

        }

    });

    /* ----------- Video Popup ---------- */ 
    const videoSrc = $("#player-1").attr('src');

    $(".video-play-btn, .video-popup").on("click", function () {

        if ($(".video-popup").hasClass("open")) {

            $(".video-popup").removeClass("open");

            $("#player-1").attr('src', '');

        }
        
        else {

            $(".video-popup").addClass("open");

            if ($("#player-1").attr('src') == '') {

                $("#player-1").attr('src', videoSrc);

            }

        }
    });

    /* ------------ Featuers Curoser ------------*/
    $('.featuer-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{

            0:{
                items:1,
            },

            600:{
                items:2,
            },

            1000:{
                items:3,
            }
        }
    });

    /* ------------ Screenshots Curoser ------------*/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{

            0:{
                items:1,
            },

            600:{
                items:2,
            },

            1000:{
                items:4,
            }
        }
    });

    /* ------------ Testimonials Curoser ------------*/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{

            0:{
                items:1,
            },

            600:{
                items:2,
            },

            1000:{
                items:3,
            }
        }
    });

    /* ------------ Team Curoser ------------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{

            0:{
                items:1,
            },

            600:{
                items:2,
            },

            1000:{
                items:3,
            }
        }
    });

    /* -------------- ScrollIt Call --------------- */
    $.scrollIt({
        topOffset: -50,
        scrollTime: 200
    });

    /* --------- Navbar Collapse -------------- */
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    /* ----------- Toggle Them - light and Dark ------------- */
    function toggleThem() {
        if(localStorage.getItem("Mahmoud-theme") !== null) {
            if(localStorage.getItem("Mahmoud-theme") === "dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }
        updataIcon();
    }
    toggleThem();

    $(".toggle-them").on("click", function () {
        $("body").toggleClass("dark")
        if($("body").hasClass("dark")) {
            localStorage.setItem("Mahmoud-theme", "dark");
        } else {
            localStorage.setItem("Mahmoud-theme", "light");
        }
        updataIcon();
    });

    function updataIcon() {
        if($("body").hasClass("dark")) {
            $(".toggle-them i").removeClass("fa-moon");
            $(".toggle-them i").addClass("fa-sun");
        } else {
            $(".toggle-them i").removeClass("fa-sun");
            $(".toggle-them i").addClass("fa-moon");
        }
    }

});

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)