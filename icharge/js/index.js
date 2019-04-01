$(window).resize(function () {
    autoHeightMobile();
  });
  autoHeightMobile();

function autoHeightMobile() {
  var windowWidth = $(window).width();
  if (windowWidth < 900) {
    $('section.section').addClass('fp-auto-height');
    // scrollOverflow = false;
  } else {
    $('section.section').removeClass('fp-auto-height');
  }
}

