
$(window).on("load", function() {
    if($('.loader-container').length) {
      $('.loader-container').delay(2000).fadeOut(500);
    }
  });
// youtube video js start here

    jQuery("a.bla-1").YouTubePopUp({
        autoplay: 0
    }); // Disable autoplay


document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 85 )) {
            return false;
        }
};