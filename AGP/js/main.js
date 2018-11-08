jQuery(function($) {
  $("#menu_trigger_button").click(function() {
    $("#menu_container").toggleClass("hidden active");
    $("#menu_trigger_button").toggleClass("hidden active")
  });
})