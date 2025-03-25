//! Events: events propagation
//? The example bellow works but is not the best way
// $(document).ready(function () {
//   $("#books_list tbody").on("click", "tr", function (e) {

//     $("#books_list tbody tr").removeClass("trselected");

//     $(this).addClass("trselected");
//   });

//   $("#btn_add_book").on("click", function () {
//     let tr = `
//       <tr>
//         <td>Til</td>
//         <td>José de Alencar</td>
//       </tr>`;

//     $("#books_list tbody").append(tr);
//   });
// });

//* This is the best way (using .find())
// $(document).ready(function () {
//   $("#books_list tbody").on("click", "tr", function (e) {
//     $(e.delegateTarget).find("tr").removeClass("trselected");

//     $(this).addClass("trselected");
//   });

//   $("#btn_add_book").on("click", function () {
//     let tr = `
//       <tr>
//         <td>Til</td>
//         <td>José de Alencar</td>
//       </tr>`;

//     $("#books_list tbody").append(tr);
//   });
// });

//! Stopping the propagation in situations where a certain event
//! affecting outer structures
//! should not affect inner structures: .event.stopPropagation()
// $(document).ready(function () {
//   $("#form_login").on("change", "[name]", function () {
//     alert(`Elemento mudou. Seu valor: ${$(this).val()}`);
//   });

//   $("#form_login [name=bio]").on("change", function (event) {
//     event.stopPropagation();
//     $(this).css("background", "red");
//   });
// });

//! Removing an event from an element
// $(document).ready(function () {
//   let entries = 100;
//   $(".register").append(`<u> - Ainda restam ${100 - entries} vagas</u>`);

//   $("#form_login [type=submit]").on("submit", function (e) {
//     e.preventDefault();
//     alert("Você foi cadastrado com sucesso!");
//   });

//   if (entries >= 100) {
//     $("#form_login [type=submit]").off("click");
//     alert("não há mais vagas");
//   }
// });
