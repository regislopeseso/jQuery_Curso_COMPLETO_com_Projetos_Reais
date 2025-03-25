//! Events: form events
// Evento ocorre quando um elemento é colocado em foco: .focus()
// $("[name]").focus(function () {
//   $(this).css("background", "yellow");
// });´

// Evento ocorre quando um elemento é colocado em foco: .focus()
// Similar ao .focus(), porém engloba "child elements"
// $(".form-group").focusin(function () {
//   $(this).css("background", "yellow");
// });

// Evento ocorre quando um elemento deixa de estar em foco: .blur()
// $("[name]").blur(function () {
//   alert(`Você digitou ${$(this).val()}`);
// });

// Evento ocorre quando um elemento deixa de estar em foco: .focusout()
// Similar ao .blur(), porém engloba "child elements"
// $(".form-group").focusout(function () {
//   alert(`Você digitou ${$(this).val()}`);
// });

// Evento ocorre quando um campo é selecionado
// e tem seu valor alterado (ex.: lista, radio, etc): .change()
// $("[name]").change(function () {
//   alert(`Valor do campo ${$(this).val()}`);
// });

// Evento ocorre quando um valor (por ex. texto) é selecionado dentro de um campo: .select()
// $("[name]").select(function () {
//   alert(`Valor do campo ${$(this).val()}`);
// });

// Evento ocorre ao submeter um formulário: .submit()
// $("form").submit(function (event) {
//   event.preventDefault();

//   console.log($(this).serializeArray());
// });

// Ex. de .find()
// $("#link_logo").click(function (event) {
// event.preventDefault();

// $(this).find("img").attr("src", "img/screenshot_1.png");
// });
