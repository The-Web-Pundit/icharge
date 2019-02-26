$(document).ready(function() {
  $(".fruit-slider")
    .slick({
      dots: false,
      infinite: true,
      centermode:false,
      slidesToShow: 4.8,
      slidesToScroll: 1,
      rows: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5
          }
        },
        {
          breakpoint: 576,
          settings: {
            dots:false,
            slidesToShow: 1
          }
        }
      ]
    })
  
	
});$(document).ready(function () {
	if ($('.navbar').hasClass('trans-navbar')) {
		// Function to make transparent navbar to white background navbar on scrolling
		$(window).scroll(function () {
			if 	($(document).scrollTop() > 230) {
				$('.fixed-top').removeClass('bg-transparent').addClass('header-bg shadow-sm')
				$('.nav-link').removeClass('head-color')
				$('.fas.fa-bars').addClass('text-dark');
				// $('.navbar .nav-link, .fas.fa-bars').addClass('text-dark');
			} else {
				$('.fixed-top').removeClass('header-bg shadow-sm').addClass('bg-transparent');
				$('.nav-link').addClass('head-color')
				$('.active .nav-link').removeClass('head-color')
				$('.fas.fa-bars').removeClass('text-dark');
				// $('.navbar .nav-link, .fas.fa-bars').removeClass('text-dark');
			}
		});

	
		// Function to make transparent navbar to white background in mobile view on clicking toggler
		$('.navbar-toggler').click(function () {
			if ($('.navbar-collapse.collapse').hasClass('show') && $(document).scrollTop() < 150) {
				// $('.fixed-top').removeClass('bg-transparent').addClass('bg-white shadow-sm');
				$('.fixed-top').removeClass('header-bg shadow-sm').addClass('bg-transparent');
				$('.navbar .nav-link, .fas.fa-bars').removeClass('text-dark');
			} else {
				$('.fixed-top').removeClass('bg-transparent').addClass('header-bg  shadow-sm');
				$('.fas.fa-bars').addClass('text-dark');
				$('.navbar .nav-link').removeClass('head-color')
				$('.active .nav-link').removeClass('text-dark')
			}
		});
	}
});
if (matchMedia('only screen and (min-width: 480px)').matches) {
  // enable plugin
}