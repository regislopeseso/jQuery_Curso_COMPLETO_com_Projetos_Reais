//! Animations
// Turning off animations:
// $.fx.off = true;

// Example 2
$(document).ready(function () {
  $(".btn_toggle_item").on("click", function () {
    $(this).prev(".course_item_inner").toggle(1000);
  });

  $("#disable_effects").on("click", function () {
    $.fx.off = !$.fx.off;
  });
});
