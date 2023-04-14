    $(document).ready(function(){
      $('section.servicos-div .container').slick({
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
		  arrows: false,
		  centerMode: true,
		  autoplaySpeed: 2000,
		  responsive:[

		  	{breakpoint: 1114,

		  	settings:{
		  	arrows: false,
		  	slidesToShow: 4,
		  	centerMode: true
		  	}
		  },

		  	{breakpoint: 778,
		  	settings:{
		  		arrows: false,
		  		slidesToShow: 3,
		  		centerMode: true
		  	}}

		  	]
	});

      });