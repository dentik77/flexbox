$(document).ready(function() {

	$('.menu-triger').click(function() {
		$('.navigation-list').slideToggle(500);
	});
	$(window).resize(function() {
		if ($(window).width()>761){
			$('.navigation-list').removeAttr('style');
		}
	});
});