$('.teachers').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1
})

$('.testimonials-images').slick({
    doots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.testimonials-text',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
})

$('.testimonials-text').slick({
    doots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.testimonials-images',
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
})


$('.courses-card').click(function() {
    $(this).siblings('.courses-more').addClass('active');
})

$('.courses-more-close').click(function() {
    $(this).parent('.courses-more').removeClass('active');
})

$(".header-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1500);
});

$('.btn-bars').click(function() {
    $('.header-menu').toggleClass('active');
    $(this).toggleClass('active');
    $('body').toggleClass('overflow');
})