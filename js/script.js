$('.teachers').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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