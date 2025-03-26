//! Animations: ordering animations
//compare each example:
//#1
$("#init_effect").on("click", function () {
  $(".logo").animate({
    marginTop: "+=90px",
    marginLeft: "+=300px",
  });
});

//#2
$("#init_effect").on("click", function () {
  $(".logo")
    .animate({
      marginTop: "+=90px",
    })
    .animate({
      marginLeft: "+=300px",
    });
});

//#3
$("#init_effect").on("click", function () {
  $(".logo")
    .animate({
      marginTop: "+=90px",
    })
    .animate({
      marginLeft: "+=300px",
    })
    .fadeOut(2000);
});

//#4
$("#init_effect").on("click", function () {
  $(".logo")
    .animate({
      marginTop: "+=90px",
    })
    .animate({
      marginLeft: "+=300px",
    })
    .queue(function () {
      $("h1").text("Animação concluída").css({
        color: "red",
      });
      $(this).dequeue();
    })
    .fadeOut(2000);
});

//#5
$("#init_effect").on("click", function () {
  $(".logo")
    .animate({
      marginTop: "+=90px",
    })
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

// --- //
// Limpando a fila:
// $(document).ready(function () {
//   $(".btn_toggle_item").on("click", function () {
//     $(this).prev(".course_item_inner").toggle(1000);
//   });

//   $("#disable_effects").on("click", function () {
//     $.fx.off = !$.fx.off;
//   });

//   $("#init_effect").on("click", function () {
//     $(".logo")
//       .animate({
//         marginTop: "+=90px",
//       })
//       .animate({
//         marginLeft: "+=300px",
//       })
//       .queue(function () {
//         $("h1").text("Animação concluída").css({
//           color: "red",
//         });
//         $(this).dequeue();
//       })
//       .clearQueue()
//       .fadeOut(2000);
//   });
// });
