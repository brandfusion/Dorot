// function mkdfInitElementsAnimations(){

//     var touchClass = $('.mkdf-no-animations-on-touch'),
//         noAnimationsOnTouch = true,
//         elements = $('.mkdf-grow-in, .mkdf-fade-in-down, .mkdf-element-from-fade, .mkdf-element-from-left, .mkdf-element-from-right, .mkdf-element-from-top, .mkdf-element-from-bottom, .mkdf-flip-in, .mkdf-x-rotate, .mkdf-z-rotate, .mkdf-y-translate, .mkdf-fade-in, .mkdf-fade-in-left-x-rotate'),
//         animationClass,
//         animationData;

//     if (touchClass.length) {
//         noAnimationsOnTouch = false;
//     }

//     if(elements.length > 0 && noAnimationsOnTouch){
//   elements.each(function(){
//     $(this).appear(function() {
//       animationData = $(this).data('animation');
//       if(typeof animationData !== 'undefined' && animationData !== '') {
//         animationClass = animationData;
//         $(this).addClass(animationClass+'-on');
//       }
//     },{accX: 0, accY: mkdfGlobalVars.vars.mkdfElementAppearAmount});
//   });
//     }

// }

$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
	  rtl:true,
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout: 7000,
      autoplayHoverPause:false,
      autoplaySpeed: 1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });


  if ($('li.active.current > ul').length > 0)
  {
      $(this).find("#maincontent").addClass('spaceContent');
  }
});



$(document).ready(function(){

	var rand = Math.floor(Math.random() * 2) + 1;
	
	if(rand == 1){
		$(".switch-box-industry").removeClass('switch-box-industry');

	}else{
		$(".switch-box-water").removeClass('switch-box-water');

	}



});




$(window).scroll(function(){


  var row1 = $(".rowAnimate1");
  var row2 = $(".rowAnimate2");


  var scrolltop = $(window).scrollTop();


  
 
  
  if(scrolltop <= 800){
     row1.removeClass('hidden').addClass('animated fadeInUp');

}
	if(scrolltop > 950 && scrolltop < 1800) {
     row2.removeClass('hidden').addClass('animated fadeInUp');

}


});


$(window).load(function() {
    var row1 = $(".rowAnimate1");
    var row2 = $(".rowAnimate2");
   var scrolltop = $(window).scrollTop();
   
  if(scrolltop <= 800){
     row1.removeClass('hidden').addClass('animated fadeInUp');

}

	if(scrolltop > 950 && scrolltop < 1800) {
     row2.removeClass('hidden').addClass('animated fadeInUp');

}

  
});





$(function(){
	var hiddenField = $("input#leo").parent().parent();
	hiddenField.hide();
	var selectDropdown = $("select#FieldofInterest");
	var selectDropdown2 = $("select#Interestedin");
	
	selectDropdown.on("change" , function(event){
	var value = $(this).val();
	
		if(value == "Other - specify"){
			hiddenField.show();
		}
		else{
			hiddenField.hide();
		}
		
	});

	selectDropdown2.on("change" , function(event){
	var value = $(this).val();
	
		if(value == "Others - specify"){
			hiddenField.show();
		}
		else{
			hiddenField.hide();
		}
		
	});


	// $(".evenTable a").on("click" , function(event){
	// 	if($(this).attr("href").indexOf(".pdf") > 0) {
	// 		event.preventDefault();
	// 		$(this).addClass
	// 	}
	// });

	// $(".evenTable a").each(function(index , el){
	// 	if($(this).attr("href").indexOf(".pdf") > 0) {
	// 		$(this).addClass("media");
	// 	}
	// });


	// $('a.media').on('click',function(event){
	// 	event.preventDefault();

	//     var pdf_link = $(this).attr('href');

	//     var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
	//     $.createModal({
	//     title:'Viewer',
	//     message: iframe,
	//     closeButton:true,
	//     scrollable:true
	//     });
	        
	// });   




	if($('#secondNavigation').length) {
		if($(window).width() >= 992)  {
			$("#secondNavigation").stick_in_parent({parent: $('.mobile-wrapper'),offset_top: 136, bottom: false})
			.on("sticky_kit:stick", function(e) {
					console.log("has stuck!", e.target);
				})
			.on("sticky_kit:unstick", function(e) {
				console.log("has unstuck!", e.target);
			});
		}
		
	}
});
