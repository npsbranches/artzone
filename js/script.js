if (window.innerWidth < 576) {

  function removeAos() {
    var elem = document.getElementById('aos-css-file');
    elem.parentNode.removeChild(elem);
    return false;
  }
  removeAos();

}

AOS.init();

$('.teachers').slick({
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
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
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
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


$('.open-popup-link').magnificPopup({});


$('.courses-more-close').click(function () {
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

$('.btn-bars').click(function () {
  $('.header-menu').toggleClass('active');
  $(this).toggleClass('active');
  $('body').toggleClass('overflow');
})

$(".header-menu").on("click", "a", function (event) {
  if ($(window).width() < 768) {
    $('.header-menu').toggleClass('active');
    $('.btn-bars').toggleClass('active');
    $('body').toggleClass('overflow');
  }
});