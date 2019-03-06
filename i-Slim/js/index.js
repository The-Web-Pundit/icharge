

$(document).ready(function () {
	if ($('.navbar').hasClass('trans-navbar')) {
		// Function to make transparent navbar to white background navbar on scrolling
		$(window).scroll(function () {
			if 	($(document).scrollTop() > 130) {
				$('.fixed-top').removeClass('bg-transparent').addClass('bg-white shadow-sm')
				$('.nav-link').removeClass('text-white')
				$('.fas.fa-bars').addClass('text-dark');
				// $('.navbar .nav-link, .fas.fa-bars').addClass('text-dark');
			} else {
				$('.fixed-top').removeClass('bg-white shadow-sm').addClass('bg-transparent');
				// $('.nav-link').addClass('text-white')
				$('.active .nav-link').removeClass('text-white')
				$('.fas.fa-bars').removeClass('text-dark');
				$('.navbar .nav-link, .fas.fa-bars').removeClass('text-dark');
			}
		});

	
		// Function to make transparent navbar to white background in mobile view on clicking toggler
		$('.navbar-toggler').click(function () {
			if ($('.navbar-collapse.collapse').hasClass('show') && $(document).scrollTop() < 150) {
				// $('.fixed-top').removeClass('bg-transparent').addClass('bg-white shadow-sm');
				$('.fixed-top').removeClass('bg-white shadow-sm').addClass('bg-transparent');
				$('.navbar .nav-link, .fas.fa-bars').removeClass('text-dark');
			} else {
				$('.fixed-top').removeClass('bg-transparent').addClass('bg-white shadow-sm');
				$('.fas.fa-bars').addClass('text-dark');
				$('.navbar .nav-link').removeClass('text-white')
				$('.active .nav-link').removeClass('text-dark')
			}
		});
	}
});

$('.carousel').carousel({
  interval: 1000000
})


