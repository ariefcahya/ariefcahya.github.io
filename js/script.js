/*========================================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Project:        Intelart - Business Agency HTML5 Template
Version:        1.0
Last change:    20/04/2020
Primary use:    Business Agency. 
Author:         Ingenious_team
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

========================================================================*/
$(function () {
    "use strict";

    // for navbar background color when scrolling
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $("#back-top-btn");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 10) {
            stickytop.addClass('navcss');
        } else {
            stickytop.removeClass('navcss');
        }

        if ($scrolling > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });


    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    //animation scroll js
    var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* navOffset ends */
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });

    // this is for back to top and sticky menu js
    var bc2top = $('#back-top-btn');
    bc2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 1500);
    });


    setTimeout(function () {
        $('#exampleModal5').modal('show');
    }, 100);
    //portfolio carousel


    $('.price_slick').slick({
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
    },

            {
                breakpoint: 575,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }
  ]
    });

    $('.testimonial_slick').slick({
        centerPadding: '0px',
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 1100,
                settings: {
                    centerPadding: '10px',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
    },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
    },

            {
                breakpoint: 572,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
    }
  ]
    });

    //    // youtube video js start here
    //
    //    jQuery("a.bla-1").YouTubePopUp({
    //        autoplay: 0
    //    }); // Disable autoplay

    //    mix itup

    var containerEl = $('#project_mix');
    var mixer = mixitup(containerEl);

});