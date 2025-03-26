//! Events: creating namespaces for events:

//? The event bellow won't work properly
//? it should remove the red coloring only
//? but it will remove also the underline
// $(document).ready(function () {
//   $("p").on("click", function () {
//     $(this).toggleClass("underline_section");
//     $(this).toggleClass("selected_session");
//   });

//   $("#btn_remove_css_color").on("click", function () {
//     $("p").off("click");
//   });
// });

//* Now when a namespace is creating: click.colorRed
//* then it works properly
//* since now the .off() method can be referred to
//* selected_session only.
// $(document).ready(function () {
//   $("p").on("click.colorRed", function () {
//     $(this).toggleClass("selected_session");
//   });

//   $("p").on("click", function () {
//     $(this).toggleClass("underline_section");
//   });

//   $("#btn_remove_css_color").on("click", function () {
//     $("p").off("click.colorRed");
//   });
// });
