$(document).ready(function() {
// sidbar
	$('.menu-triger').click(function() {
		$('.navigation-list').slideToggle(500);
			});
	$(window).resize(function() {
		if ($(window).width()>780){
			$('.navigation-list').removeAttr('style');
			
		}
	});
// top-menu
	$('.topmenu').click(function() {
		

		// $(".top-list").addClass("top-list1"),
		// $('.top-list1').removeClass('top-list');
		// $('.top-list1').slideToggle(500);
		
		$('.top-list').slideToggle(500);
			});
	$(window).resize(function() {
		if ($(window).width()>921){
			// $(".top-list1").addClass("top-list"),
			// $('.top-list').removeClass('top-list1');
			$('.top-list').removeAttr('style');
			 
			
		}
	});

});
;(function( $, window, document, undefined )
{
	$.fn.doubleTapToGo = function( params )
	{
		if( !( 'ontouchstart' in window ) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

		this.each( function()
		{
			var curItem = false;

			$( this ).on( 'click', function( e )
			{
				var item = $( this );
				if( item[ 0 ] != curItem[ 0 ] )
				{
					e.preventDefault();
					curItem = item;
				}
			});

			$( document ).on( 'click touchstart MSPointerDown', function( e )
			{
				var resetItem = true,
					parents	  = $( e.target ).parents();

				for( var i = 0; i < parents.length; i++ )
					if( parents[ i ] == curItem[ 0 ] )
						resetItem = false;

				if( resetItem )
					curItem = false;
			});
		});
		return this;
	};
})( jQuery, window, document );

// (function(){
// 	$('#nav')
// 	e.preventDefault();
// });