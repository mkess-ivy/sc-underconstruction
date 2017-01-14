jQuery(document).ready(function($) {  

	// site preloader -- also uncomment the div in the header and the css style for #preloader
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});


// Slider
  $('.sc-slick').slick({
    autoplay: true,
	autoplaySpeed: 4000,
	arrows: false,
	infinite: true,
	fade: true,
	speed: 2500,
	cssEase: 'linear'
  });

  $('.sc-slick2').slick({
    autoplay: true,
	autoplaySpeed: 1500,
	arrows: false,
	infinite: true,
	fade: true,
	speed: 1500,
	cssEase: 'linear'
  });


 //  $('.autoplay').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   autoplay: true,
	//   autoplaySpeed: 2000,
	// });

	// $('.fade').slick({
	//   dots: true,
	//   infinite: true,
	//   speed: 500,
	//   fade: true,
	//   cssEase: 'linear'
	// });

});



