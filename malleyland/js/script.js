//accordion-menu

// ( function( $ ) {
// $( document ).ready(function() {

// $('#cssmenu .sub a').on('click', function(){
// $('#cssmenu .sub').each(function(){
//     $(this).removeClass('active');
// });

//     if($(this).parents('.sub').hasClass('active')){
//         $(this).parents('.sub').removeClass('active').find('ul').fadeOut('500');

//     }
//     else{
//       $(this).parents('.sub').addClass('active').find('ul').fadeIn('500');;
//     }

// });

// });
// } )( jQuery );

( function( $ ) {
$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active'); 
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false; 
  }   
});
});
} )( jQuery );


//mobile-menu


$(document).ready(function(){ 
  var touch   = $('#touch-menu');
  var menu  = $('.top-menu');

  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });
  
});

//


