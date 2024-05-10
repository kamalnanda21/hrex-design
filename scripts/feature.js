// slick slider - features.html

$('.card-area').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Autoplay speed in milliseconds
    arrows: true, // Show arrows
    prevArrow: '<button type="button" class="slick-prev"></button>', // Custom prev arrow
    nextArrow: '<button type="button" class="slick-next"></button>', // Custom next arrow
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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