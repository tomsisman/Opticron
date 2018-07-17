$(document).foundation()


$(document).ready(function () {
    $('.product-categories').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});


