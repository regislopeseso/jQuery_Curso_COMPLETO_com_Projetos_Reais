// $(document).ready(function () {
//   function loadData() {
//     $.get("http://localhost:3000/books", function (response) {
//       $("table tbody").html("");

//       $.each(response, function (index, item) {
//         let tr = `
//           <tr>
//             <td>${item.name}</td>
//             <td>${item.author}</td>
//           </tr>

//         `;
//         $("table tbody").append(tr);
//       });
//     });
//   }

//   loadData();

//   $("#form_create_book").on("submit", function (event) {
//     event.preventDefault();

//     let data = {};

//     $.each($(this).serializeArray(), function (index, item) {
//       data[item.name] = item.value;
//     });

//     $.post("http://localhost:3000/books", data, function (response) {
//       loadData();
//     });
//   });
// });
