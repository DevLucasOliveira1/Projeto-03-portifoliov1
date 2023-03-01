$(function(){

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


})