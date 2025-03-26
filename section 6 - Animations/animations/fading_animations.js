//! Animations: .fadeout()
// $(".courses_list .course_item_inner:eq(3)").fadeOut("slower");
// $(".courses_list .course_item_inner:eq(3)").fadeOut("slowerer");
// $(".courses_list .course_item_inner:eq(3)").fadeOut("fast");
// $(".courses_list .course_item_inner:eq(3)").fadeOut("faster");
// $(".courses_list .course_item_inner:eq(3)").fadeOut(1000);
//

// $(".courses_list .course_item_inner:eq(3)").fadeIn("slower");
// $(".courses_list .course_item_inner:eq(3)").fadeIn("slowerer");
// $(".courses_list .course_item_inner:eq(3)").fadeIn("fast");
// $(".courses_list .course_item_inner:eq(3)").fadeIn("faster");
// $(".courses_list .course_item_inner:eq(3)").fadeIn(1000);

// Essas funções permitem também o uso de uma callback function, isto é,
// funções que são ativadas assim que o fading termina
// $(".courses_list .course_item_inner:eq(3)").fadeOut(1000, function () {
//   $(this).css("border", "solid red 2px");
// });

// Altera a opacidade de um elemento com uma animação
// $(".logo img").fadeTo(1000, 1);

// Ex.
// $(".btn_toggle_item").on("click", function () {
//   $(this)
//     .prev(".course_item_inner")
//     .fadeToggle("slow", function () {
//       console.log("Sumi ou apareci");
//     });
// });
