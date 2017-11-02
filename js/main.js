$(window).on("scroll", function() {

  // Navigation
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("animated navbar-fixed-top animated slideInDown scroll");
    $(".navbar").removeClass("slideOutUp");
  } else if ($(this).scrollTop() <= 100 && $(this).scrollTop() > 300) {
    $(".navbar").removeClass("slideInDown");
    $(".navbar").addClass("slideOutUp");
  } else if ($(this).scrollTop() <= 100) {
    $(".navbar").removeClass(" animated navbar-fixed-top slideOutUp  scroll");
  }
});

//Smooth menu
$(document).ready(function() {
  $("nav.navbar navbar-default lightHeader > li > a").click(function() {
    $("nav.navbar navbar-default lightHeader > li").removeClass("active");
    $(this).parent().addClass('active');
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 30
    }, 700);
    return false;

  });

//Popup_phone

  setTimeout(function() { 
 		$('.popup1').addClass('active');
  }, 4000); 

  $('.phone').mask('+7 (000) 00000');

  $('.popup_close').click(function(e) {
   	//e.preventDefault();
    $('.popup1').removeClass('active');
    return false; 
  });
      
   //Popup_order
  $('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
    return false;
  });
  $('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
  });

});



// $(window).scroll(function() {
// 	var scrolled = $(window).scrollTop();
// 	if (scrolled > 300) { 	
// 		$('.popup').bPopup();
// 	}
// });


 




