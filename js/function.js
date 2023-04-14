$(function(){ // APLICANDO A FUNÇÃO DO MENU MOBILE

	$('.mobile').click(function(){

		$('.mobile ul').slideToggle(500);
	})

	$('#insta').click(function(){

		$('#instatext').toggle(300).css(
			'min-height','40px',
			'transition','0'
			);
	})	

	$('#telefone').click(function(){

		$('#telefonetext').toggle(300).css(
			'min-height','40px',
			'transition','0'
			);
	})	

	$('#email').click(function(){

		$('#emailtext').toggle(300).css(
			'min-height','40px',
			'transition','0'
			);
	})	

	$('#linkedin').click(function(){

		$('#linkedintext').toggle(300).css(
			'min-height','40px',
			'transition','0'
			);
	})	


//-----------------------------------------------------------//

	// APLICANDO AS FUNÇÕES DO SLIDE 1

	var indiceAtual = 0;
	var indiceMaximo = $('.slider1 img').length; 
	var delay = 5000;

	initSlider();

	cliqueSlider();

		function initSlider(){
			for(var i = 0; i < indiceMaximo; i++){
				if(i == 0){
					$('.bullets-nav1').append('<span style="scale:1.2;"></span>')
				}else{
					$('.bullets-nav1').append('<span></span>')
				}
			}

			$('.slider1 img').eq(0).fadeIn();
			setInterval(function(){
				alternarSlider();
			},delay);
		}

		function cliqueSlider (){
			$('.bullets-nav1 span').click(function(){
				$('.slider1 img').eq(indiceAtual).stop().fadeOut(2000);
				indiceAtual = $(this).index();
				$('.slider1 img').eq(indiceAtual).stop().fadeIn(2000);
				$('.bullets-nav1 span').css('scale','1');
				$(this).css('scale','1.2');
			})
		}

		function alternarSlider(){
			$('.slider1 img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual+=1;
			if(indiceAtual == indiceMaximo)
				indiceAtual = 0;
			$('.bullets-nav1 span').css('scale','1');
			$('.bullets-nav1 span').eq(indiceAtual).css('scale','1.2');
			$('.slider1 img').eq(indiceAtual).stop().fadeIn(2000);

		}
})
//-----------------------------------------------------------//

$(function(){ 	// APLICANDO AS FUNÇÕES DO SLIDE 2

		var indiceAtual = 0;
	var indiceMaximo = $('.slider2 img').length; 
	var delay = 5000;

	initSlider();

	cliqueSlider();

		function initSlider(){
			for(var i = 0; i < indiceMaximo; i++){
				if(i == 0){
					$('.bullets-nav2').append('<span style="scale:1.2;"></span>')
				}else{
					$('.bullets-nav2').append('<span></span>')
				}
			}

			$('.slider2 img').eq(0).fadeIn();
			setInterval(function(){
				alternarSlider();
			},delay);
		}

		function cliqueSlider (){
			$('.bullets-nav2 span').click(function(){
				$('.slider2 img').eq(indiceAtual).stop().fadeOut(2000);
				indiceAtual = $(this).index();
				$('.slider2 img').eq(indiceAtual).stop().fadeIn(2000);
				$('.bullets-nav2 span').css('scale','1');
				$(this).css('scale','1.2');
			})
		}

		function alternarSlider(){
			$('.slider2 img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual+=1;
			if(indiceAtual == indiceMaximo)
				indiceAtual = 0;
			$('.bullets-nav2 span').css('scale','1');
			$('.bullets-nav2 span').eq(indiceAtual).css('scale','1.2');
			$('.slider2 img').eq(indiceAtual).stop().fadeIn(2000);

		}

})

//-----------------------------------------------------------//

$(function(){ 	// APLICANDO AS FUNÇÕES DO SLIDE 3

	var indiceAtual = 0;
	var indiceMaximo = $('.slider3 img').length; 
	var delay = 5000;

	initSlider();

	cliqueSlider();

		function initSlider(){
			for(var i = 0; i < indiceMaximo; i++){
				if(i == 0){
					$('.bullets-nav3').append('<span style="scale:1.2;"></span>')
				}else{
					$('.bullets-nav3').append('<span></span>')
				}
			}

			$('.slider3 img').eq(0).fadeIn();
			setInterval(function(){
				alternarSlider();
			},delay);
		}

		function cliqueSlider (){
			$('.bullets-nav3 span').click(function(){
				$('.slider3 img').eq(indiceAtual).stop().fadeOut(2000);
				indiceAtual = $(this).index();
				$('.slider3 img').eq(indiceAtual).stop().fadeIn(2000);
				$('.bullets-nav3 span').css('scale','1');
				$(this).css('scale','1.2');
			})
		}

		function alternarSlider(){
			$('.slider3 img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual+=1;
			if(indiceAtual == indiceMaximo)
				indiceAtual = 0;
			$('.bullets-nav3 span').css('scale','1');
			$('.bullets-nav3 span').eq(indiceAtual).css('scale','1.2');
			$('.slider3 img').eq(indiceAtual).stop().fadeIn(2000);

		}

})

/*------------------------------------------------------------------*/

$(function(){ 	// APLICANDO AS FUNÇÕES DO SLIDE 4

	var indiceAtual = 0;
	var indiceMaximo = $('.slider4 img').length; 
	var delay = 5000;

	initSlider();

	cliqueSlider();

		function initSlider(){
			for(var i = 0; i < indiceMaximo; i++){
				if(i == 0){
					$('.bullets-nav4').append('<span style="scale:1.2;"></span>')
				}else{
					$('.bullets-nav4').append('<span></span>')
				}
			}

			$('.slider4 img').eq(0).fadeIn();
			setInterval(function(){
				alternarSlider();
			},delay);
		}

		function cliqueSlider (){
			$('.bullets-nav4 span').click(function(){
				$('.slider4 img').eq(indiceAtual).stop().fadeOut(2000);
				indiceAtual = $(this).index();
				$('.slider4 img').eq(indiceAtual).stop().fadeIn(2000);
				$('.bullets-nav4 span').css('scale','1');
				$(this).css('scale','1.2');
			})
		}

		function alternarSlider(){
			$('.slider4 img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual+=1;
			if(indiceAtual == indiceMaximo)
				indiceAtual = 0;
			$('.bullets-nav4 span').css('scale','1');
			$('.bullets-nav4 span').eq(indiceAtual).css('scale','1.2');
			$('.slider4 img').eq(indiceAtual).stop().fadeIn(2000);

		}

})


/*------------------------------------------------------------------*/

$(document).ready(function(){  // Mascara de formulário

  $('.telefone-contato').mask('(00) 0 0000-0000');

});