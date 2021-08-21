	$(document).ready(function(){
		$('.slider').slick({
			arrow:true,//кнопки для перелистывания
			dots:false,//точки
			adaptiveHeight:true,//слайды одного размера
			slidesToShow:3,//сколько слайдов мы видим
			slidesToScroll:1,//перелистывается за раз
			speed:1000,//скорость
			easing:'linear',//тип анимации
			infinite:true,//бесконечность слайдов
			initialSlide:0,//с какого слайда начать
			autoplay:false,//автоматическое переключение
			autoplaySpeed:500,//через сколько переключать
			pauseOnFocus:true,//когда в автопроигравании мы сами двигаем
			pauseOnHover:true,//когда в автопроигравании мы наводим оно остонавливается
			pauseOnDotsHover:true,//когда в автопроигравании мы наводим на точки оно остонавливается
			draggable:true,//движение с помощью мышки, когда false на телефоне можно
			swipe: true,//движение с помощью мышки, когда false на телефоне нельзя
			waitForAnimate:false,//если false переключает на каждый клик
			centerMode:true,//выделяет слайт по середине
			variableWidth:true,
		})
	});