//! Events: browser events
//
// Evento ocorre quando o a janela de navegação tem seu tamanho alterado: .resize()
// $(window).resize(function () {
//   console.info(
//     `Width: ${$(window).width()} x Hight: ${$(window).height()}`
//   );
// });

// Retorna ou dispara um evento de acordo com a posição da barra de rolagem vertical
// $(window).scroll(function () {
//   console.log(`Your position is: ${$(window).scrollTop()}`);

//   if ($(window).scrollTop() === 0) {
//     alert("Aqui é o topo da página");
//   }
//   if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
//     alert("Aqui é o fim da página");
//   }
// });

// Retorna a posição rolagem vertical: .scrollTop()
// ou dispara um evento de acordo sua posição.
// $(window).scroll(function () {
//   console.log(`Your position is: ${$(window).scrollTop()}`);

//   if ($(window).scrollTop() === 0) {
//     alert("Aqui é o topo da página");
//   }
//   if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
//     alert("Aqui é o fim da página");
//   }
// });

// Para a barra de rolagem horizontal, usar: .scrollLeft()

// Exemplo
// $(window).scroll(function () {
//   let position = $(window).scrollTop();

//   let sections = [".title", ".books", ".register"];

//   let index;

//   if (position < 50) {
//     index = 0;
//   } else if (position < 200) {
//     index = 1;
//   } else if (200 < position < 400) {
//     index = 2;
//   }

//   $(sections[index]).addClass("selected_session");

//   sections.splice(index, 1);

//   $(sections.join(", ")).removeClass("selected_session");
// });
