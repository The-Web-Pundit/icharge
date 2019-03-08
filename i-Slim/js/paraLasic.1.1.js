
jQuery(window).on('scroll', function () {

	/* PARALLAX EFFECT ON HEADER */
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var paralasicValue = $('.paralasic,.mango-banner,.vanilla-banner,.chocolate-banner').attr('data-paralasic');
		$('.paralasic,.mango-banner,.vanilla-banner,.chocolate-banner').css('background-position', 'center top -' + scrollTop * paralasicValue + 'px'); /* 1.8 - default value. Increase less to go stopping the effect */
	});

});
