$(window).resize(function() {
	navbarChange();
});

$(document).ready(function() {
	navbarChange();
});

function navbarChange() {
	var screenWidth = $(window).width();

	if(screenWidth < 576) {
		$(window).scroll(function () {
			if 	($(document).scrollTop() > 10) {
				$('.fixed-top').removeClass('bg-transparent').addClass('bg-white shadow-sm');
				if($('.navbar-collapse').hasClass('show')) {
					$('.fixed-top').removeClass('bg-transparent').addClass('bg-white');
				} else {
					$('.fixed-top').removeClass('bg-transparent').addClass('bg-white');
				}
			} else {
				$('.fixed-top').removeClass('bg-white shadow-sm').addClass('bg-transparent');
			}
		});
		
		$('.navbar-toggler').click(function() {
			if($('.navbar-collapse').hasClass('show')) {
				if 	($(document).scrollTop() <= 50) {
					$('.fixed-top').removeClass('bg-white').addClass('bg-transparent');
				} else {
					$('.fixed-top').addClass('bg-white').removeClass('bg-transparent');
				}
			} else {
				$('.fixed-top').removeClass('bg-transparent').addClass('bg-white');
			}
		});
	} else {
		$(window).scroll(function () {
			if 	($(document).scrollTop() > 150) {
				$('.fixed-top').removeClass('bg-transparent').addClass('bg-white shadow-sm');
			} else {
				$('.fixed-top').removeClass('bg-white shadow-sm').addClass('bg-transparent');
			}
		});
	}
}