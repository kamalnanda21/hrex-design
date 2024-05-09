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


// slick slider

$(document).ready(function(){
  $('.slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });
});