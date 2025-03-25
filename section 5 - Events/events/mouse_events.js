//! Events: mouse events

// Evento ocorre quando pressionarmos o botão do mouse: .mousedown()
// $("h1").mousedown(function () {
//   alert("you pressed the mouse button!");
// });

// Evento ocorre quando soltarmos o botão do mouse: .mouseup()
// $("h1").mouseup(function () {
//   alert("you pressed the mouse button!");
// });

// Evento ocorre quando clicamos com o botão do mouse: .click()
// Ex. 1:
// $("h1").click(function () {
//   alert("you pressed the mouse button!");
// });
// Ex. 2:
// $("h3.books").click(function () {
//   // $("h3.books").text("fui clicado"); // maneira não indicada
//   $(this).text("fui clicado"); // maneira indicada
// });

// Evento ocorre ao clicar com o botão direito: .contextmenu
// $("h1").contextmenu(function () {
//   alert("you pressed the mouse button!");
// });

// Evento ocorre ao realizarmos um duplo clique com o botão esq: .dblclick
// $("table tbody tr").dblclick(function () {
//   $(this).css({
//     background: "black",
//     color: "white",
//   });
// });

// Evento ocorre quando o cursor do mouse entra na região de um elemento: .mouseenter()
// $("table tbody tr").mouseenter(function () {
//   $(this).addClass("trselected");
// });

// Evento ocorre quando o cursor do mouse entra na região de um elemento: .mouseover()
// Similiar ao .mouseenter(), porém também dispara o evento ao entar em "child elements"
// $("table tbody tr").mouseover(function () {
//   $(this).addClass("trselected");
// });

// Evento ocorre quando o cursor do mouse deixa a região de um elemento: .mouseleave()
// $("table tbody tr").mouseleave(function () {
//   $(this).addClass("trselected");
// });

// Evento ocorre quando passamos o cursou do mouse sobre um elemento: .hover()
// $("table tbody tr").hover(
//   function () {
//     $(this).addClass("trselected");
//   },
//   function () {
//     $(this).removeClass("trselected");
//   }
// );

//* Evento ocorre quando o cursor do mouse se move dentro de um elemento: .mousemove()
//* Exemplo: Mostra ao usuário onde a posição x e y atual do cursor do mouse ao se mover dentro de um elento
//* $("table tbody tr").mousemove(function (event) {
//*   event.pageX, event.pagY;

//*   $("h1").text(`Posição: x = ${event.pageX} | ${event.pageY}`);
//* });
