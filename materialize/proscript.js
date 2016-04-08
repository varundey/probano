 $(document).ready(function(){

	var navOffset = $('.navbar').offset().top;

	$('.navbar').wrap('<div class="navbar-placeholder"></div>');
	$(".navbar-placeholder").height($(".navbar").outerHeight());

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if (scrollPos >= navOffset) {
			$('.navbar').addClass("fixed");
		}
		else{
			$('.navbar').removeClass("fixed")
		}

		});	

});


 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

       $('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');


