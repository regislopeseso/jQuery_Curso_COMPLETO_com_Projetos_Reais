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
