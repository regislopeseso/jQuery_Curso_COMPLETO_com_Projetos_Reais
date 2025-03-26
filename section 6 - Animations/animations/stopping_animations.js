//!
$("#init_effect").on("click", function () {
  $(".logo")
    .animate(
      {
        marginTop: "+=90px",
      },
      2000
    )
    .delay(500)
    .animate({
      marginLeft: "+=300px",
    })
    .queue(function () {
      $("h1").text("Animação concluída").css({
        color: "red",
      });
      $(this).dequeue();
    })
    .delay(1000)
    .fadeOut(2000);
});

//? Compare the use of the different paramethers:
//* #1
// $("#stop_effect").on("click", function () {
//   $(".logo").stop();
// });
//* #2
// $("#stop_effect").on("click", function () {
//   $(".logo").stop(true);
// });
//* #3
// $("#stop_effect").on("click", function () {
//   $(".logo").stop(true, true);
// });

//? .finish() method:
// $(document).ready(function () {
//   $(".btn_toggle_item").on("click", function () {
//     $(this).prev(".course_item_inner").toggle(1000);
//   });

//   $("#disable_effects").on("click", function () {
//     $.fx.off = !$.fx.off;
//   });

//   $("#init_effect").on("click", function () {
//     $(".logo")
//       .animate(
//         {
//           marginTop: "+=90px",
//         },
//         2000
//       )
//       .delay(500)
//       .animate({
//         marginLeft: "+=300px",
//       })
//       .queue(function () {
//         $("h1").text("Animação concluída").css({
//           color: "red",
//         });
//         $(this).dequeue();
//       })
//       .delay(1000);
//   });

//   $("#stop_effect").on("click", function () {
//     $(".logo").finish();
//   });
// });
