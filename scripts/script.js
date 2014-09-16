$(document).ready(function(){
   
	// function to show portfolio overlays on hover

    $(".item").hover(function(){
        $(this).find(".overlayInfo").slideDown("slow");
    },function(){
        $(this).find(".overlayInfo").slideUp("slow");    
    }); //overlay function end

 	//  function to show social media icons on click
 		function overlay() {
 			$(".followClick").click(function(){
 				$(".follow").slideToggle('slow');
 				});
 			}; // end social media function
   
   overlay();

}); // document ready end