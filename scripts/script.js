$(document).ready(function(){
   
    $(".item").hover(function(){
        $(this).find("div.slideInfo").slideDown("slow");
    },function(){
        $(this).find("div.slideInfo").slideUp("slow");    
    });
 
    
});