$(document).ready(function(){


/*
    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
    //Замінюєм svg на png якщо не підтримується

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };
*/

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        verticalOffset: 80,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });
    //Прокрутка бекграунда разом зі скролом. Необхідно stellar.min.js і наче jquery-migrate.min.js

    if (document.getElementById('btnMenu')) {
        let navMenuBtn = document.getElementById('btnMenu');
        let closeMenu = document.getElementById('closeMenu');
        let menu = document.getElementById('menu');

        navMenuBtn.addEventListener("click", function() {
            let menu = document.getElementById('menu');
            setTimeout(function () {
                menu.classList.toggle('mobile-menu--active');
            }, 100)
        });
        menu.addEventListener("click", function(e) {
            let target = e.target;

            if (target === closeMenu || target === menu || target.classList.contains('nav__item--active')) {
                //коли тиснема на переход по якорю також прибирати клас --active
                setTimeout(function () {
                    menu.classList.toggle('mobile-menu--active');
                }, 100);
            }
        });
    }

    //mobile menu

    let contentWayPoint = function() {
        let i = 0;
        $('.ftco-animate').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .ftco-animate.item-animate').each(function(k){
                        let el = $(this);
                        setTimeout( function () {
                            let effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '95%' } );
    };
    contentWayPoint();
    //анімація при прокрутці - працює разом з
    // jquery-waypoints.min.js, animate.css та в base .ftco-animate { opacity: 0, visibility: hidden;}
    //

    /*
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            // отменяем стандартное действие
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /!*
            * sc - в переменную заносим информацию о том, к какому блоку надо перейти
            * dn - определяем положение блока на странице
            *!/

            $('html, body').animate({scrollTop: dn}, 500);

            /!*
            * 1000 скорость перехода в миллисекундах
            *!/
        });
    });
*/
    //Плавна прокрутка по якорям сайту

    $(".benefits").waypoint(function() {
        $(".benefits .ben-card").each(function(index) {
            let ths = $(this);
            setInterval(function() {
                ths.removeClass("ben-card--off").addClass("ben-card--on");
            },150*index);
        });
    }, {
        offset: "30%"
    });
    //анімація карточок benefits

    $(".works").waypoint(function() {
        $(".works .works__item").each(function(index) {
            let ths = $(this);
            setTimeout(function() {
                ths.addClass("works__item--on");
            },450*index);
        });
    }, {
        offset: "50%"
    });
    //анімація works__item

    $(".team").waypoint(function() {
        $(".team .t-card").each(function(index) {
            let ths = $(this);
            setInterval(function() {
                ths.removeClass("t-card--off").addClass("t-card--on");
            },150*index);
        });
    }, {
        offset: "30%"
    });
    //анімація карточок benefits

    let nav = document.getElementById('nav');
    let navMobile = document.getElementById('navMobile');

    nav.addEventListener('click',  navActive);
    navMobile.addEventListener('click',  navActiveMobile);

    function navActive(e) {
        console.log('work');
        const navArr = [...nav.children];
        navArr.forEach((child) => {
            if (child.classList.contains('nav__item--active')) {
                child.classList.remove('nav__item--active');
            }
        });
        if (e.target.classList.contains('nav__item')) {
            e.target.classList.toggle('nav__item--active');
        }
    }

    function navActiveMobile(e) {
        const navArr = [...navMobile.children];
        navArr.forEach((child) => {
            if (child.classList.contains('nav__item--active')) {
                child.classList.remove('nav__item--active');
            }
        });
        if (e.target.classList.contains('nav__item')) {
            e.target.classList.toggle('nav__item--active');
        }
    }

    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        navText: "",
        dots: true,
        loop: true,
        fluidSpeed: 500,
        navSpeed: 500,
        dotsSpeed: 500,
        dragEndSpeed: 500,
    });
    // owl carousel

    $(".header__btn").click(function() {
        $("html, body").animate({scrollTop: $(".header").height() + 120}, "slow");
        return false;
    });
    // плавная прокрутка по нжатию на якорь

    $(".footer__bottom").click(function() {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    // плавная прокрутка по нжатию на якорь

    $(".section__desc, .section__title").animated("fadeInRight");

    $(".estimate .article, .services-article").animated("zoomIn");

    $(".deals").waypoint(function() {
        $(".deals .section__main .deals-card").each(function(index) {
            let ths = $(this);
            setInterval(function () {
                ths.addClass("deals-card--on");
            }, 200*index);
        });
    }, {
        offset: "30%"
    });

    $(".professional").waypoint(function() {
        $(".professional .professional__item").each(function(index) {
            let ths = $(this);
            setInterval(function () {
                ths.addClass("professional__item--on");
            }, 200*index);
        });
    },{
        offset: "30%"
    });

    $(".slider__item").animated("rollIn");

    $(".professional .form").animated("fadeInRight");

    $(".section .btn").click(function() {
        $("#callback h5").html($(this).text());
        $("#callback input[name=formName]").val($(this).text());
    }).magnificPopup(
        {
            type: 'inline',
            // midClick: true
        }
    );

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.magnificPopup.close();
                $(".form").trigger("reset");
            }, 1000);
        });
        return false;
    });
});