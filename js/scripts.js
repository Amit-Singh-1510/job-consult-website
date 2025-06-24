$(document).ready(function(){
  // Initialize jobs carousel if it exists
  if ($('.jobs-carousel').length) {
    $('.jobs-carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 }
        }
      ]
    });
  }

  // Initialize partner logos carousel
  if ($('.partner-logos').length) {
    $('.partner-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
      ]
    });
  }
});
