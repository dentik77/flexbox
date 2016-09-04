$(document).ready(function() {
// sidbar
	$('.menu-triger').click(function() {
		$('.navigation-list').slideToggle(500);
			});
	$(window).resize(function() {
		if ($(window).width()>761){
			$('.navigation-list').removeAttr('style');
			
		}
	});
// top-menu
	$('.topmenu').click(function() {
		

		$(".top-list").addClass("top-list1"),
		$('.top-list1').removeClass('top-list');

		// $('top-list').toggleClass('top-list1'),
		$('.top-list1').slideToggle(500);
			});
	$(window).resize(function() {
		if ($(window).width()>761){
			// $('.top-list1').css("display", "none"),
			// $('.top-list1').removeClass('top-list'),
			$(".top-list1").addClass("top-list"),
		$('.top-list').removeClass('top-list1');
			$('.top-list').removeAttr('style');
			 
			
		}
	});

});