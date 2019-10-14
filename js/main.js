$(function () {
    "use strict";


    /* Offset start */
    var html_body = $('html, body'),
        nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* offset ends */


    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('nav a , #bannar .arrow_btn a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 1500);
                return false;
            }
        }
    });

    /* navbar fixed js here */
    $window.on('scroll', function () {

        var scrollPos = $window.scrollTop();

        if (scrollPos > navOffset) {
            $('nav').addClass('navbar-fixed');
        } else {
            $('nav').removeClass('navbar-fixed');
        }

    });

    /* scrollspy menu */
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    /* isotop js */
    var portfolioitems = $(".main-iso");
    var portfoliofilterli = $(".iso-nav li a");

    portfolioitems.isotope({
        itemSelector: '.iso-item',
        layoutMode: 'fitRows',
    });

    portfoliofilterli.on('click', function () {
        portfoliofilterli.removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        portfolioitems.isotope({
            filter: selector,
            animation0ptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    /* slider for blog */
    $('.blog_slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'ease',
        speed: 1000,
        slidesToShow: 2,
        arrows: false,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    });

    /* slider for testimonial */
    $('.testimonial_slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'ease',
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    });

    /* slider for client_logo */
    $('.client_logo').slick({
        dots: false,
        infinite: true,
        cssEase: 'ease',
        speed: 1000,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    });


    /* scroll bottom to top js here */
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $window.scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $window.on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    };

    /* preloader js */
    $window.on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });


    /* progressbar js */
    $('#bar1').barfiller({
        barColor: '#383938CC'
    });
    $('#bar2').barfiller({
        barColor: '#383938CC'
    });
    $('#bar3').barfiller({
        barColor: '#383938CC'
    });
    $('#bar4').barfiller({
        barColor: '#383938CC'
    });
    $('#bar5').barfiller({
        barColor: '#383938CC'
    });

});
