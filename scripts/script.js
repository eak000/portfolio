$(document).ready(function(){
   
	// function to show portfolio overlays on hover

    $(".item").hover(function(){
        $(this).find(".slideInfo").slideDown("slow");
    },function(){
        $(this).find(".slideInfo").slideUp("slow");    
    }); //overlay function end

 	//  function to show social media icons on click
 		$(".followClick").click(function(){
 				$(".follow").show("slide", { direction: "right" }, 1000);
 			},function(){
 				$(".follow").hide("slide", { direction: "left" }, 1000);
 			}); // end social media function
    
}); // document ready end