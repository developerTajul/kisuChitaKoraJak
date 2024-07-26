(function ($) {
    "use strict";
    $(document).ready(function () {

        /*=======================
        navba toggle active
        =========================*/
        const toggleButton = document.getElementById('toggle-button');
        const topyMenu = document.getElementById('toggle-active');

        toggleButton.addEventListener('click', function() {
        topyMenu.classList.toggle('active');
        });
       
       /*========================
               Slider
       ============================*/
       $(".hero-slider-active").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        draggable: true,
        arrows: true,
        slidesToScroll: 1,
        loop: true,
        speed: 1500,
            prevArrow: '<button class="slick-arrow btn-prev"><i class="fa-solid fa-arrow-right"></i></button>',
            nextArrow: '<button class="slick-arrow btn-next"><i class="fa-solid fa-arrow-left"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: true,
                },
            },
        ],
        });
        /*==========================
        Testimonial Slider
        ============================*/
        $('.testimonial-active-slider').slick({
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '0',
            vertical:true,
            verticalSwiping:true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical:false,
                    }
                },
            ],
            
            });

            $('.testimonial-active-slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 1500,
            asNavFor: '.testimonial-active-slider',
            prevArrow: '<button class="slick-arrow btn-prev"><i class="fa-solid fa-caret-right"></i></button>',
            nextArrow: '<button class="slick-arrow btn-next"><i class="fa-solid fa-caret-left"></i></button>',
        });


        /*==========================
        Portfolio Slider
        ============================*/
        $(".portfolio-area-active").slick({
            slidesToShow: 3.35,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 1500,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            rtl: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        /*==========================
        Blog Details Slider
        ============================*/
        $('.blog-page-active-slider').slick({
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0',
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical:false,
                    }
                },
            ],
            
            });

        /*============================
        Service Details Accordion
        ============================*/
        document.querySelectorAll('.wuc-accordion-wrapper').forEach((accordion) => {
            const title = accordion.querySelector('.wuc-accordion-title');
            const rightArrow = title.querySelector('.right-arrow');
            const bottomArrow = title.querySelector('.bottom-arrow');
            const content = accordion.querySelector('.wuc-accordion-pra');
        
            title.addEventListener('click', () => {
                content.classList.toggle('active');
                rightArrow.classList.toggle('active');
                bottomArrow.classList.toggle('active');
            });
        });
       
      
        /*============================
        Magnific Popup
        ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
        /*
        Window nev scrolled fixed
        ============================*/
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
              $('.fixed-menu').addClass('scrolled');
            } else {
              $('.fixed-menu').removeClass('scrolled');
            }
        });
      
        /*
        Window Load Offcanvas
        ============================*/
          $(".canvas-menu").click(function(){
            $(".off-canvas-menu").addClass("canvas-ative");
            $(".off-canvas-menu-overlay").addClass("canvas-overlay-ative");
          });
          $(".close-icon").click(function(){
            $(".off-canvas-menu").removeClass("canvas-ative");
            $(".off-canvas-menu-overlay").removeClass("canvas-overlay-ative");
          });
        /*
        /*
        Window Load Offcanvas
        ============================*/
        $(document).ready(function() {
            $(".search-btn-active").click(function() {
                $('body').css('overflow', 'hidden');
                $(".search-menu-container").addClass("search-menu-active");
                $(".search-menu-overlay").addClass("search-menu-overlay-active");
            });
          
            $(".close-btn").click(function() {
                $('body').css('overflow', 'auto');
                $(".search-menu-container").removeClass("search-menu-active");
                $(".search-menu-overlay").removeClass("search-menu-overlay-active");
            });
          
            window.onclick = function(e) {
                if (e.target.matches(".search-menu-overlay")) {
                    $('body').css('overflow', 'auto');
                    $(".search-menu-container").removeClass("search-menu-active");
                    $(".search-menu-overlay").removeClass("search-menu-overlay-active");
                }
            }
          });
          
      
      
        /*
        Window Load
        ============================*/
        $(window).on("load", function () {
            /*
            Preeloader
            ============================*/
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({
                "overflow-x": "hidden"
            });
        });

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function () {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
                return false;
            });
        });

    });
})(jQuery);

/*=======================
Dropdown Toggle Active
=========================*/ 
function toggleList(listNumber) {
    var allLists = document.querySelectorAll('.hidden-list');

    allLists.forEach(function(list) {
        if (list.id === 'dropdown-toggle-menu-' + listNumber) {
            list.style.display = list.style.display === 'block' ? 'none' : 'block';
        } else {
            list.style.display = 'none';
        }
    });
}