$(document).ready(function(){
   
	// function to show portfolio overlays on hover

    $(".item").hover(function(){
        $(this).find(".overlayInfo").slideDown("slow");
    },function(){
        $(this).find(".overlayInfo").slideUp("slow");    
    }); //overlay function end

 	//  function to show social media icons on click
 		// function follow() {
 		// 	$(".followClick").click(function(){
 		// 		$(".follow").slideToggle('slow');
 		// 		});
 		// 	}; // end social media function

 			// function slideOut() {
 			// 	$(".info").click(function() {
 			// 		$(".slideOutInfo").slideDown('slow');
 			// 	}); //end slideout function
 			// }
   
   // follow();
   // slideOut();

}); // document ready end