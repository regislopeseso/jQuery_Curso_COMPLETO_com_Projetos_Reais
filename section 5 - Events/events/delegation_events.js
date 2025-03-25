//! Events: event delegation

//? The code bellow won't work because the when the modification nr.2
//? after being added won't know about the modification nr.1
// $(document).ready(function () {
// //? Modification nr.1
// $("#books_list tbody td").on("click", function (e) {
//   $("#books_list tbody td").removeClass("trselected");

//   $(this).addClass("trselected");
// });
// //?Modification nr.2
// $("btn_add_book").on("click", function () {
//   let tr = `
//   <tr>
//     <td>Til</td>
//     <td>José de Alencar</td>
//   </tr>`;

//     $("#books_list tbody").append(tr);
//   });
// });

//* This is the correct way to make it work:
// $(document).ready(function () {
//   $("#books_list tbody").on("click", "td", function (e) {
//     $("#books_list tbody td").removeClass("trselected");

//     $(this).addClass("trselected");
//   });

//   $("#btn_add_book").on("click", function () {
//     let tr = `
//     <tr>
//       <td>Til</td>
//       <td>José de Alencar</td>
//     </tr>`;

//     $("#books_list tbody").append(tr);
//   });
// });
