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


// slick slider - index.html

$('.slick-slider').slick({
  fade: true,
  speed: 3000,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Autoplay speed in milliseconds
  arrows: true, // Show arrows
  prevArrow: '<img src="/assets/images/right-arrow.png" class="slick-prev">', // Custom prev arrow
  nextArrow: '<img src="/assets/images/right-arrow.png" class="slick-next">', // Custom next arrow
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