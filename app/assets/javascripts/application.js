// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require flickity.pkgd.min
//= require jquery.fancybox.pack
//= require modernizr-2.6.2.min
//= require modernizr.custom
//= require retina
//= require waypoints.min
//= require toucheffects
//= require_tree .


$(document).ready(function() {
	
		/***************** Waypoints ******************/

		$('.wp1').waypoint(function() {
			$('.wp1').addClass('animated fadeInLeft');
		}, {
			offset: '75%'
		});

		$('.wp2').waypoint(function() {
			$('.wp2').addClass('animated fadeInDown');
		}, {
			offset: '75%'
		});

		$('.wp3').waypoint(function() {
			$('.wp3').addClass('animated bounceInDown');
		}, {
			offset: '75%'
		});

		$('.wp4').waypoint(function() {
			$('.wp4').addClass('animated fadeInDown');
		}, {
			offset: '75%'
	});

		$('.wp5').waypoint(function() {
			$('.wp5').addClass('animated zoomInDown');
		}, {
			offset: '75%'
	});

});

	/***************** Flickity ******************/

$(window).load(function() {
		console.log("window has loaded for flickity");
	$('#featuresSlider').flickity({
			cellAlign: 'left',
			contain: true,
			prevNextButtons: false,
			imagesLoaded: true,
			lazyLoad: 4,
			autoPlay: true
	});

});












