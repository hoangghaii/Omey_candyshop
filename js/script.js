$(function () {

    /** --- Loading page ---  */
    $(window).on('load', function () {
        $('body').removeClass('preloading');
        $('#loading').delay(100).fadeOut('slow');
    });

    /** --- Scroll bar --- */
    $(window).on("scroll", function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.height = scrolled + "%";
    });

    /** --- menu scroll effect --- */
    $(window).scroll(function () {
        var vitri = $('html').scrollTop();
        if (vitri >= 180) {
            $('.menu').addClass('menuscroll');
            $('.sub-menu').addClass('scroll');
            $('.bag-cart').addClass('scroll');
        } else if (vitri < 180) {
            $('.menu').removeClass('menuscroll');
            $('.sub-menu').removeClass('scroll');
            $('.bag-cart').removeClass('scroll');
        }
    });

    /** --- move background --- */
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.cate-banner .bg').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function (e) {

        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();

    /** --- Remove preventDefault ---  */
    $('.product-content-right__title a').click(function (e) {
        let target = $(this).attr("href");
        $('.product-content-right__content__product').hide('slow');
        $(target).show('slow');
        $('.product-content-right__title a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('.prod-footer__title a').click(function (e) {
        let target = $(this).attr("href");
        $('.prod-footer__content--prod').hide('slow');
        $(target).show('slow');
        $('.prod-footer__title a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    /** --- Owl carosel --- */
    $('.brand-carousel').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplaySpeed: 2000
    });

    /** --- Remove preventDefault của a herf (c1): ---  */
    /** --- dùng javascript --- */
    // const selectEle = (ele) => document.querySelectorAll(ele);

    // selectEle('.more')[0].addEventListener('click', function (e) {
    //     e.preventDefault();
    // });

    // for (let i = 0; i < selectEle('.blog-more').length; i++) {
    //     selectEle('.blog-more')[i].addEventListener('click', function (e) {
    //         e.preventDefault();
    //     });
    // }

    // for (let i = 0; i < selectEle('.info a').length; i++) {
    //     selectEle('.info a')[i].addEventListener('click', function (e) {
    //         e.preventDefault();
    //     });
    // }

    /** --- Remove preventDefault của a herf (c2): ---  */
    /** --- dùng jquery --- */
    $('.more').click(function (e) {
        e.preventDefault();
    });

    $('.blog-more').click(function (e) {
        e.preventDefault();
    });

    $('.info a').click(function (e) {
        e.preventDefault();
    });

    $('.search-btn').click(function (e) {
        e.preventDefault();
    });

    /** --- Scroll top ---  */
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.gotop').show();
        } else {
            $('.gotop').hide();
        }
    });
    $('.gotop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    /** --- Drawer Cart --- */
    var drawerCart = document.getElementById("drawerCart");
    var cart = document.getElementById('cart');
    drawerCart.addEventListener("click", function (e) {
        cart.classList.toggle("show");
        e.preventDefault();
    })

});
