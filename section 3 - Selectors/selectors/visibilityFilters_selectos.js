//! Selectors: visibility filter
// Seleciona os elementos que estão ocultos;
// $('.cars_list li:hidden').show()

// Seleciona os elementos que estão visíveis;
// $(".cars_list li:visible").hide();

//!? Letting items be either hidden or shown with two separate functions
//* <button type="button" id="show_cars">Mostrar carros ocultos</button>
//* <button type="button" id="hide_cars">Ocultar carros</button>

// $("#show_cars").click(function () {
//   $(".cars_list li:hidden").css("text-decoration", "underline").show();
// });

// $("#hide_cars").click(function () {
//   $(".cars_list li:visible").hide();
// });

//!? Letting items be either hidden or shown with only one function
//* <button type="button" id="toggle_cars">Exibir/Ocultar os carros</button>

// $("#toggle_cars").click(function () {
//   let hiddenCars = $(".cars_list li:hidden").length;

//   let method = hiddenCars > 0 ? "show" : "hide";

//   eval(`$('.cars_list li').${method}()`);
// });
