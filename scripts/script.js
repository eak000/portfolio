$(document).ready(function(){
   
	// function to show portfolio overlays on hover

    $(".item").hover(function(){
        $(this).find(".overlayInfo").slideDown("slow");
    },function(){
        $(this).find(".overlayInfo").slideUp("slow");    
    }); //overlay function end

 	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

}); // document ready end