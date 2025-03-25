//! Events: method on
//Exemplo 1:
// $("#books_list tbody td").on("click", function (e) {
//   $("#books_list tbody td").css({
//     backgroundColor: "initial",
//     color: "initial",
//   });

//   $(this).css({
//     backgroundColor: "black",
//     color: "white",
//   });
// });

// Exemplo 2: mais de um evento => click e contextmenu (botão esquerdo e direito)
// $("#books_list tbody td").on("click contextmenu", function (e) {
//   if (e.type == "contextmenu") e.preventDefault();

//   $("#books_list tbody td").css({
//     backgroundColor: "initial",
//     color: "initial",
//   });

//   $(this).css({
//     backgroundColor: "black",
//     color: "white",
//   });
// });
