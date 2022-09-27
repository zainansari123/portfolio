/* --------------------------------------------

Page Loader

-------------------------------------------- */

$(window).load(function() {

	'use strict';

	$(".loader-item").delay(700).fadeOut();

	$("#pageloader").delay(800).fadeOut("slow");
	
/* --------------------------------------------

Carousel-slider

-------------------------------------------- */	
	
	'use strict';
	
	$(".owl-demo").owlCarousel({

		items : 1,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [991, 1],
		itemsTablet : [768, 1],
		itemsTabletSmall : false,
		itemsMobile : [479, 1],

		lazyLoad : true,

		autoPlay: true,

		navigation : false

	});
	
	
	
/* --------------------------------------------

Text Slider Home Page

-------------------------------------------- */

	  'use strict';



      $('.text-slider').flexslider({

        animation: "slide",

		selector: ".slide-text li",

		controlNav: false,

		directionNav: false,

		slideshowSpeed: 4000,

		touch: true,

		useCSS: false,

		direction: "vertical",

        before: function(slider){        

		 var height = $('.text-slider').find('.flex-viewport').innerHeight();

		 $('.text-slider').find('li').css({ height: height + 'px' });

        }		

      });


});


/* --------------------------------------------

Home Background Super Slider 

-------------------------------------------- */

$('#slides').superslides({

	animation: 'fade',

});





jQuery(document).ready(function($) {	

	'use strict';	

	/* --------------------------------------------

		Animated Items

	-------------------------------------------- */



	$('.animated').appear(function() {

		var elem = $(this);

		var animation = elem.data('animation');

		if ( !elem.hasClass('visible') ) {

			var animationDelay = elem.data('animation-delay');

			if ( animationDelay ) {



				setTimeout(function(){

					elem.addClass( animation + " visible" );

				}, animationDelay);



			} else {

				elem.addClass( animation + " visible" );

			}

		}

	});

	

	/* --------------------------------------------

		Load More 

	-------------------------------------------- */

	var loadtext = $('.load-more');

	$(".load-posts").click(function() {

		if($(this).hasClass('disable')) return false;

		

			$(this).html('<i class="fa fa-spin fa-spinner"></i> Loading');

			

			var $hidden = loadtext.filter(':hidden:first').delay(600);  

   

		   	if (!$hidden.next('.load-more').length) {

			   $hidden.fadeIn(500);

				$(this).addClass('disable');

				$(this).fadeTo("slow", 0.23)/*.delay(600)*/

				.queue(function(n) {

				 $(this).html('All Posts Loaded');

				 n();

				}).fadeTo("slow", 1);

			

		   	} else {

				$hidden.fadeIn(500);

				$(this).fadeTo("slow", 0.23)/*.delay(600)*/

				.queue(function(g) {

				 $(this).html('Load More Post <i class="flaticon-arrow209">');

				 g();

				}).fadeTo("slow", 1);			

		   	}

	});

	

});






/* --------------------------------------------

 Scroll Navigation

-------------------------------------------- */	

$(function() {

	'use strict';	

	jQuery('.scroll').bind('click', function(event) {

		var $anchor = jQuery(this);

		var headerH = jQuery('#navigation').outerHeight();

			jQuery('html, body').stop().animate({					

				scrollTop : jQuery($anchor.attr('href')).offset().top  + 2 + "px"

			}, 1200, 'easeInOutExpo');



		event.preventDefault();

	});

});

/* --------------------------------------------

 Active Navigation

-------------------------------------------- */



	jQuery('body').scrollspy({ 

		target: '#topnav',

		offset: 95

	})

	



/* --------------------------------------------

 Video Script

-------------------------------------------- */

$(".player").mb_YTPlayer();	



/* --------------------------------------------

 Count Factors

-------------------------------------------- */  

jQuery(function() {

	$(".fact-number").appear(function(){

		$('.fact-number').each(function(){

		dataperc = $(this).attr('data-perc'),

			$(this).find('.factor').delay(6000).countTo({

				from: 10,

				to: dataperc,

				speed: 3000,

				refreshInterval: 50,	

			});  

		});

	});

});

 

(function($) {

	'use strict';

	$.fn.countTo = function(options) {

		// merge the default plugin settings with the custom options

		options = $.extend({}, $.fn.countTo.defaults, options || {});

	

		// how many times to update the value, and how much to increment the value on each update

		var loops = Math.ceil(options.speed / options.refreshInterval),

			increment = (options.to - options.from) / loops;

	

		return $(this).each(function() {

			var _this = this,

				loopCount = 0,

				value = options.from,

				interval = setInterval(updateTimer, options.refreshInterval);

	

			function updateTimer() {

				value += increment;

				loopCount++;

				$(_this).html(value.toFixed(options.decimals));

	

				if (typeof(options.onUpdate) == 'function') {

					options.onUpdate.call(_this, value);

				}

	

				if (loopCount >= loops) {

					clearInterval(interval);

					value = options.to;

	

					if (typeof(options.onComplete) == 'function') {

						options.onComplete.call(_this, value);

					}

				}

			}

		});

	};

	

	$.fn.countTo.defaults = {

		from: 0,  // the number the element should start at

		to: 100,  // the number the element should end at

		speed: 1000,  // how long it should take to count between the target numbers

		refreshInterval: 100,  // how often the element should be updated

		decimals: 0,  // the number of decimal places to show

		onUpdate: null,  // callback method for every time the element is updated,

		onComplete: null,  // callback method for when the element finishes updating

	};

	

})(jQuery); 


			
			
jQuery(document).ready(function() { 

	

/* --------------------------------------------

Fixed Menu on Scroll

-------------------------------------------- */

	'use strict';

	$("#sticky-section").sticky({topSpacing:0});
	

/* --------------------------------------------

Screenshot Scripts

-------------------------------------------- */

		'use strict';
		jQuery("#screenshot").owlCarousel({
			items : 5,
			lazyLoad : true,
			autoPlay: false,
			navigation : false,
			itemsCustom : false,
			itemsDesktop : [1199, 4],
			itemsDesktopSmall : [991, 3],
			itemsTablet : [768, 2],
			itemsTabletSmall : false,
			itemsMobile : [479, 1]
		});
	
/* --------------------------------------------

Testimonials Scripts

-------------------------------------------- */	

		'use strict';
		jQuery("#feedback").owlCarousel({
			items : 1,
			lazyLoad : true,
			autoPlay: true,
			navigation : true,
			itemsCustom : false,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [991, 1],
			itemsTablet : [768, 1],
			itemsTabletSmall : false,
			itemsMobile : [479, 1]
		});
		
		
		
/* --------------------------------------------

 Pretty Photo

-------------------------------------------- */	

		'use strict';
	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
	
			theme: "light_square",
			hook: 'data-rel'
	
		});
	


/* --------------------------------------------

Contact Form

-------------------------------------------- */	


		'use strict';

		$('#contactform').bootstrapValidator({

			message: '',

			feedbackIcons: {

				valid: 'glyphicon glyphicon-ok',

				invalid: 'glyphicon glyphicon-remove',

				validating: 'glyphicon glyphicon-refresh'

			},

			fields: {            

				contact_name: {

					validators: {

						notEmpty: {

							message: ''

						}

					}

				},

				contact_email: {

					validators: {

						notEmpty: {

							message: ''

						},

						emailAddress: {

							message: ''

						}

					}

				},			

				contact_message: {

					validators: {

						notEmpty: {

							message: ''

						}                    

					}

				}

			},

			submitHandler: function(validator, form, submitButton) {				

				$('.contact-form').addClass('ajax-loader');				

				var data = $('#contactform').serialize();				

				$.ajax({

						type: "POST",

						url: "mail/process.php",					

						data: $('#contactform').serialize(),

						success: function(msg){

							$('.contact-form').removeClass('ajax-loader');

							$('.form-message').html(msg);

							$('.form-message').show();

							submitButton.removeAttr("disabled");

							resetForm($('#contactform'));

						},

						error: function(msg){

							$('.contact-form').removeClass('ajax-loader');

							$('.form-message').html(msg);

							$('.form-message').show();

							submitButton.removeAttr("disabled");

							resetForm($('#contactform'));

						}

				 });				 

				return false;

			},

    });	

	

	/* Contact Form 2 */

	$('#contactform1').bootstrapValidator({

			message: '',

			feedbackIcons: {

				valid: 'glyphicon glyphicon-ok',

				invalid: 'glyphicon glyphicon-remove',

				validating: 'glyphicon glyphicon-refresh'

			},

			fields: {            

				contact_email: {

					validators: {

						notEmpty: {

							message: ''

						},

						emailAddress: {

							message: ''

						}

					}

				}			

			},

			submitHandler: function(validator, form, submitButton) {

				

				$('.contact-form1').addClass('ajax-loader');

				

				var data = $('#contactform1').serialize();

				

				$.ajax({

						type: "POST",

						url: "mail/subscription.php",					

						data: $('#contactform1').serialize(),

						success: function(msg){

							$('.contact-form1').removeClass('ajax-loader');

							$('.form-message1').html(msg);

							$('.form-message1').show();

							submitButton.removeAttr("disabled");

							resetForm($('#contactform1'));

						},

						error: function(msg){

							$('.contact-form1').removeClass('ajax-loader');

							$('.form-message1').html(msg);

							$('.form-message1').show();

							submitButton.removeAttr("disabled");

							resetForm($('#contactform1'));

						}

				 });

				 

				return false;

			},

    });

	

	function resetForm($form) {

		$form.find('input:text, input:password, input, input:file, select, textarea').val('');

		$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');

	}	



})



$(document).ready(function() { 



	// Menus hide after click --  mobile devices

	'use strict';

	$('.nav li a').click(function () {

		 $('.navbar-collapse').removeClass('in');

	});


/* --------------------------------------------

Portfolio Scripts

-------------------------------------------- */	

	'use strict';

	if( $('#portfolio-wrapper').length) {

		$('#portfolio-wrapper').mixItUp();

	} 



	//expander

  	var loader = $('.item-expander');

	if(typeof loader.html() == 'undefined'){

		$('<div class="item-expander"><div id="item-expander" class="container clearfix relative"><p class="cls-btn"><a class="close">X</a></p><div/></div></div>').css({opacity:0}).hide().insertAfter('.portfolio');

		loader = $('.item-expander');

	}

	$('.expander').on('click', function(e){

		e.preventDefault();

		e.stopPropagation();

		var url = $(this).attr('href');

		loader.slideUp(function(){

			$.get(url, function(data){

				var portfolioContainer = $('.portfolio');

				var topPosition = portfolioContainer.offset();

				var bottomPosition = topPosition + portfolioContainer.height();

				$('html,body').delay(600).animate({ scrollTop: bottomPosition - -10}, 800);

				var container = $('#item-expander>div', loader);

				

				container.html(data);

				 $(".fit-vids").fitVids();

				$('.project').flexslider({

					animation: "fade",

					selector: ".project-slides .slide",

					controlNav: true,

					directionNav: true ,

					slideshowSpeed: 5000,  

				  });

				

				//container.fitVids();

				loader.slideDown(function(){

					if(typeof keepVideoRatio == 'function'){

						keepVideoRatio('.project-video > iframe');

					}

				}).delay(1000).animate({opacity:1}, 200);

			});

		});

	});		

	$('.close', loader).on('click', function(){

		loader.delay(300).slideUp(function(){

			var container = $('#item-expander>div', loader);

			container.html('');

			$(this).css({opacity:0});

			

		});

		var portfolioContainer = $('.portfolio');

			var topPosition = portfolioContainer.offset().top;

			$('html,body').delay(0).animate({ scrollTop: topPosition - 70}, 500);

	});
	
	


/* --------------------------------------------

 Overlay 

-------------------------------------------- */

	'use strict';

	if (Modernizr.touch) {

		// show the close overlay button

		$(".close-overlay").removeClass("hidden");

		// handle the adding of hover class when clicked

		$(".img").click(function(e){

			if (!$(this).hasClass("hover")) {

				$(this).addClass("hover");

			}

		});

		// handle the closing of the overlay

		$(".close-overlay").click(function(e){

			e.preventDefault();

			e.stopPropagation();

			if ($(this).closest(".img").hasClass("hover")) {

				$(this).closest(".img").removeClass("hover");

			}

		});

	} else {

		// handle the mouseenter functionality

		$(".img").mouseenter(function(){

			$(this).addClass("hover");

		})

		// handle the mouseleave functionality

		.mouseleave(function(){

			$(this).removeClass("hover");

		});

	}
	

});	   





/* -------------------------------------------- 

 Blog Flex Slider

-------------------------------------------- */

$('.flexslider').flexslider({

	animation: 'fade',

	slideshow: false,

	animationLoop: false,

	controlNav: false

});

