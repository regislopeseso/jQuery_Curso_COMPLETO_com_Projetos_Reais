//! Manipulation: CSS classes
// Adicionando uma classe:
// ex.1: $("header .menu ul li:last").addClass("stylized_menu")
// ex.2: $("header .menu ul li:last a").addClass("stylized_menu")

// Removendo uma classe.:
// $("header .menu ul li:last a").removeClass("stylized_menu")

// Alternando uma classe:
// $(this).toggleClass("stylized_menu");
// ex.:
// $("header .menu ul li a").click(function (event) {
//   event.preventDefault();
//   $(this).toggleClass("stylized_menu");
// });

// Verificando se um elemento possui uma classe:
// $('header .menu ul li:last a').hasClass('stylized_menu')

// Ex.:
// $("p").each(function () {
//   if ($(this).hasClass("paragrafo")) {
//     $(this).append(
//       `<span style="color: red;"> - Eu tenho a classe</span>`
//     );
//   }
// });
