$(document).ready(function(){
   
	// function to show portfolio overlays on hover

var timer;
var delay = 1000;

$(".item").hover(function(){
    // on mouse in, start a timeout

    timer = setTimeout(function() {
        // do your stuff here
        $(this).find(".overlayInfo").slideDown("slow");
    },function(){
        $(this).find(".overlayInfo").slideUp("slow");    
    }, delay);
}, function() {
    // on mouse out, cancel the timer
    clearTimeout(timer);
});

//my overlay function
   $(".item").hover(function(){
        $(this).find(".overlayInfo").slideDown("slow");
    },function(){
        $(this).find(".overlayInfo").slideUp("slow");    
    }); //overlay function end

   //function for scrolling transitions
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