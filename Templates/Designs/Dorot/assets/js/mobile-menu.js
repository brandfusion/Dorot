(function($){
  $(".mobile-nav li a").click(function(e){
      $(this).parent("li").find("a.fly-mask:first").toggleClass("fly-mask-active");   
      $(this).parent().parent().find("li").removeClass("fly-in");   
      // $(this).addClass("fly-in");
        if ($(this).parent().parent().parent("li").hasClass("fly-in")) {
          $(this).parent().addClass("fly-in");
        } else  {
          $(".mobile-nav").find("li.fly-in").removeClass();
          $(this).parent().addClass("fly-in");
        }           
        
        if ($(this).parent().parent().parent("li").hasClass("fly-in-active")) {

        } else  {
          $(this).parent().addClass("fly-in-active");
        } 
        
        if ($(this).parent("li").children("ul").length) {
          e.preventDefault();
        }
      }); 
    $("a.fly-mask").on("click", function(){
      $(this).parent("li").removeClass("fly-in");
    });
    var open = false;
  	var navOpened = false;
    var cartOpened = false;
    $(".fa-bars").click(function(){
      if (cartOpened == false) {
      	$(".mobile-mini-cart").hide();
        $(".mobile-nav").show();
        moveLeft = $(window).width()*0.8;     
        $(".mobile-nav li").removeClass("fly-in");
        if (open == true) {
          $(".mobile-wrapper").css("transform", 'translate(0px,0px)');      
          open = false;
          navOpened = false;
          $(".mobile-nav").removeClass("active-side");
        } else {  
            $(".left-view").addClass("active-side");  
            $(".right-view").hide();  
            $(".left-view").show();         
          $(".mobile-wrapper").css("transform", 'translate('+ -moveLeft +'px,0px)');      
          open = true;
          navOpened = true;
        } 
          
      } else {
      	$(".mobile-wrapper").css("transform", 'translate(0px,0px)');
        open = false
        cartOpened = false
        setTimeout(function(){
        
        $(".mobile-mini-cart").hide();
        $(".mobile-nav").show();
        moveLeft = $(window).width()*0.8;     
        $(".mobile-nav li").removeClass("fly-in");
        if (open == true) {
          $(".mobile-wrapper").css("transform", 'translate(0px,0px)');      
          open = false;
          navOpened = false;
          $(".mobile-nav").removeClass("active-side");
        } else {  
            $(".left-view").addClass("active-side");  
            $(".right-view").hide();  
            $(".left-view").show();         
          $(".mobile-wrapper").css("transform", 'translate('+ -moveLeft +'px,0px)');      
          open = true;
          navOpened = true;
        } 
        
        
        }, 300);
      }
      
    });
  $(".header-mobile .fa-shopping-cart").click(function(){
    if (navOpened == false) {
      
       $(".mobile-nav").hide();
        $(".mobile-mini-cart").show();     
        moveLeft = $(window).width()*0.8;     
        $(".mobile-nav li").removeClass("fly-in");
        if (open == true) {
          $(".mobile-wrapper").css("transform", 'translate(0px,0px)');      
          open = false;
          cartOpened = false;
          $(".mobile-nav").removeClass("active-side");
        } else {  
            $(".left-view").addClass("active-side");  
            $(".right-view").hide();  
            $(".left-view").show();         
          $(".mobile-wrapper").css("transform", 'translate('+ -moveLeft +'px,0px)');      
          open = true;
          cartOpened = true;
        } 
      
      
      
    } else {
      $(".mobile-wrapper").css("transform", 'translate(0px,0px)');
       open = false
       navOpened = false
        setTimeout(function(){
       $(".mobile-nav").hide();
        $(".mobile-mini-cart").show();     
        moveLeft = $(window).width()*0.8;     
        $(".mobile-nav li").removeClass("fly-in");
        if (open == true) {
          $(".mobile-wrapper").css("transform", 'translate(0px,0px)');      
          open = false;
          cartOpened = false;
          $(".mobile-nav").removeClass("active-side");
        } else {  
            $(".left-view").addClass("active-side");  
            $(".right-view").hide();  
            $(".left-view").show();         
          $(".mobile-wrapper").css("transform", 'translate('+ -moveLeft +'px,0px)');      
          open = true;
          cartOpened = true;
        } 
        }, 300);
       
       
    }	
     
    });
     
})(jQuery);