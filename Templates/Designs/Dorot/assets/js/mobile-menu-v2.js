$(function(){

// event listeners mobile menu

  $('#mobile-nav-button').on("click", function(){   
      $('#mobile-navigation-overlay').show();
      $('body').addClass("overlay-active");      
      setTimeout(function(){
        $('#mobile-navigation-overlay').addClass("animated fadeIn");
      }, 300);
  });

  $('#mobile-navigation-overlay .overlay-close').on("click", function(){
    $('#mobile-navigation-overlay').addClass("fadeOut");      
    $('body').addClass("overlay-active"); 
    setTimeout(function(){
      $('#mobile-navigation-overlay').hide().removeClass("animated fadeIn").removeClass("fadeOut");
    }, 300);
    
  });
  $('#mobile-navigation-overlay li').each(function(){
    var hasChildren = $(this).children("ul").length > 0 ? true : false;

    if(hasChildren) {
      var childrenCount = $(this).children("ul").children("li").length;
      $(this).children('a').append('<span>('+childrenCount+')</span>');
    }
  });
  $('#mobile-navigation-overlay li').addClass("animated fadeInRight"); 
  $('#mobile-navigation-overlay .root').children('li').children('a').on("click", function(e){     
    e.preventDefault();

    if ($(this).parent('li').hasClass("go-back")) {
      $(this).parent('li').children('ul').hide();
      $(this).find("i").remove();
      $(this).parent('li').removeClass("go-back");
      $('#mobile-navigation-overlay .content-scrollable').children('ul').eq(1).show();

    } else {
      $(this).prepend('<i class="fa fa-angle-left"></i>');
      $('#mobile-navigation-overlay .content-scrollable').children('ul').eq(1).hide();
      $(this).parent('li').addClass("go-back");     
      $(this).parent('li').children('ul').show();
    }
  });
  $('#mobile-navigation-overlay .content-scrollable').children("ul").eq(1).children('li').children('a.hasChildren').on("click", function(e){     
    e.preventDefault();

    if ($(this).parent('li').hasClass("go-back")) {
      $(this).parent('li').children('ul').hide();
      $(this).find("i").remove();
      $(this).parent('li').removeClass("go-back");
      $(this).parents("ul").children('li').show();

    } else {
      $(this).prepend('<i class="fa fa-angle-left"></i>');
      $(this).parents("ul").children("li").children("ul").hide();
      $(this).parents("ul").children("li").hide();
      $(this).parents("li").show();
      $(this).parent('li').addClass("go-back");     
      $(this).parent('li').children('ul').show();
    }
  });
  $('#mobile-navigation-overlay .M2 a, .mobile-navigation-secondary a').on("click", function(e){
    var hasChildren = $(this).parent("li").children("ul").length > 0 ? true : false;
    console.log(hasChildren);
    if (hasChildren) { 
      e.preventDefault();

      if ($(this).parent('li').hasClass("go-back")) {
        $(this).parent('li').children('ul').hide();
        $(this).parent('li').siblings('li').show();
        $(this).parent('li').find("i").remove();
        $(this).parent('li').removeClass("go-back");

      } else {
        $(this).prepend('<i class="fa fa-angle-left"></i>');
        $(this).parent('li').siblings('li').hide().removeClass("go-back");
        $(this).parent('li').addClass("go-back");
        $(this).parent('li').children('ul').show();
      }


    
    
    } 
    
  });



});