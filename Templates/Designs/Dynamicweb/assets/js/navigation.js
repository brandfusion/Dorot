$(function () {

function createRows(target, number) {   
    //target must be an ul
    var $target = target;
    var counter = $target.children("li").length / number + 1;
    console.log(counter);
    for (var i = counter - 1; i >= 0; i--) {
      $target.children("li").slice(0, number).wrapAll("<div class='megaMenuRow clearfix'></div>");       
    }

  }
  $('.vertical .pageLevel3').each(function(){     
    createRows($(this), 3); 
  });

  // mega-menu
  // var megaMenuWidth = $('#mainNavContainer').width() - 15;
  // $('#mainNavContainer .pageLevel3').css("width", megaMenuWidth);
  // $(window).resize(function(){    
  //   megaMenuWidth = $('#mainNavContainer').width() - 15;
  //   $('#mainNavContainer .pageLevel3').css("width", megaMenuWidth);
  // });
  
  
});