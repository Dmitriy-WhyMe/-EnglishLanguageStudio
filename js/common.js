$('.section8__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.section8__slider2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.section15__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.phone').mask('+7 (999) 999-99-99');

$('.header__bottom-humb').on('click', function () {
    $('.header__bottom nav').toggleClass('mvis');
    $('.header__bottom-humb').toggleClass('hopen');
});


// Magnific popup
$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
        afterClose: function () {
            $('.success').css({ 'opacity': '0', 'z-index': '-1' });
            $('.white-popup').css({ 'display': 'block' });
        },
    },
});
$("#popup2").submit(function () {
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
    }).done(function () {
        $.magnificPopup.open({
            items: { src: '#text-popup-anim2' },
            type: 'inline'
        }, 0);
        setTimeout(function () {
            // Done Functions
            $.magnificPopup.close()
            th.trigger("reset");
        }, 3000);
    });
    return false;
});