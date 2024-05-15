// slick slider - features.html

$('.card-area').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
    arrows: true, // Show arrows
    prevArrow: '<img src="/images/feature-images/next-arrow.png" class="slick-prev">', // Custom prev arrow
    nextArrow: '<img src="/images/feature-images/next-arrow.png" class="slick-next">', // Custom next arrow
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

// hamburger menu 

const hamburger = document.getElementById("hamburger");
const mobileNavbar = document.getElementById("mobile-navbar");

hamburger.addEventListener("click", function() {
  mobileNavbar.classList.toggle("open");
  hamburger.classList.toggle("cross");
  if (mobileNavbar.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});


$('.slick-slider2').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 5000, // Autoplay speed in milliseconds
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

// Functionality to move to the previous slide
$('.prev-slide').click(function () {
  $('.slick-slider2').slick('slickPrev');
});

// Functionality to move to the next slide
$('.next-slide').click(function () {
  $('.slick-slider2').slick('slickNext');
});