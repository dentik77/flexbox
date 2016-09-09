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
// адаптация верхнего иеню под мобильную версию
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
// Модуль добавления формы
var addForm = (function (){

	var init = function(){
				// console.log('Инициализация модуля addProject');
				_setUpListners();
			};
		var	_setUpListners = function (){
				$('#in-form').on('click', _showModalV); // открыть модальное окно
				$('#registr-form').on('click', _showModalR); // открыть модальное окно
				$('#toregister').on('click', _showModalR);
				$('#toin').on('click', _showModalV);//
				// $('#avtorizaciya').on('submit', _proverForm); //проверка формы

			};
		var	_showModalV = function (e){
      	console.log('Вызов модального окна vxod');

   			e.preventDefault();// отмена стандартного поведения (чтобы по нажатию на ссылку не подпрыгивала вверх)
	    	$('#modal-in').bPopup({
	    		speed: 650,
	    		transition: 'slideUp',
	    		transitionClose: 'slideDown'
	    		
	    		
	    	});

	    };   
	    var _showModalR = function (e){
	    console.log('Вызов модального окна registr');

	    	e.preventDefault();
	    	$('#modal-reg').bPopup({
	    		speed: 650,
	    		transition: 'slideUp',
	    		transitionClose: 'slideDown'
	    		
	    	});	
	    };

	    // var _proverForm = function (e) {
	    // console.log('Вызов модального окна проверки формы');
	    // 	e.preventDefault();

	    // 	// объявляем переменные
	    // 	var form = $(this),
	 	  // 		url = '_add_form.php',
	    // 		data = form.serialize();

	    // 		console.log (data);
	    // 	// запрос на сервер
	    // 	$.ajax({
	    // 		url: url,
	    // 		type: 'POST', // тип запроса
	    // 		dataType: 'json', // тип данных
	    // 		data: data,

	    // 	})
	    // 	.done(function(ans){ // приходит ответ от сервера
	    // 		console.log("succes");
	    // 		console.log(ans);
	    // 	})
	    // 	.fail(function(){
	    // 		console.log("error");
		   // 	})
	    // 	.always(function(){
	    // 		console.log("complete");
	    // 	})

	    // };

	return {
		init: init
	};

})();

addForm.init();