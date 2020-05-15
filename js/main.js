$(function(){

  $('.slider__inner').slick({
  	slidesToShow: 1,
 	 	slidesToScroll: 1,
  	arrows: true,
 	 	fade: true,
  	asNavFor: '.slider__nav'
	});

	$('.slider__nav').slick({
  	slidesToShow: 6,
  	slidesToScroll: 1,
  	asNavFor: '.slider__inner',
  	centerMode: false,
  	arrows: false,
  	dots: false,
  	focusOnSelect: true,
  	variableWidth: true,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
	});

  $('.header__menu-btn').on('click', function (){
    $('.header__menu > ul').slideToggle();
  });

});