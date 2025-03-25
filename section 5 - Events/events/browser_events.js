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
