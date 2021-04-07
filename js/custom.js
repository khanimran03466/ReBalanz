$(function(){




$('.anyWhere .slider-sec ul').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  speed: 500,
  dots:false,
  arrows: true,
  fade:true,
  autoplay:true

});

$('.review-slider ul').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  speed: 500,
  dots:false,
  arrows: true,
  responsive: [
    {
    
    breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },

  ]

});

$(".fancybox").fancybox({
  type: "iframe",
  // other API options
})

$(".collapse").collapse();

$(".quetions-list .card-header").on("click", function(){
  $(this).siblings(".card-cont").slideToggle(300)
})



$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});

AOS.init();



});