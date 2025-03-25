//! Event: object event
// $("p").click(function (event) {
//   //* Retorna qual tipo de evento foi disparado: event.type
//   alert(`Você realizou um evento de: ${event.type}()`);

//   //* Retorna o alvo do event(), por exemplo uma tag que
//   //* precisou ser clicada para disparar um evento: event.target
//   alert(`Você o alvo deste evento foi: <${event.target.localName}>`);

//   //* Retorna sempre a tag mestre e não a filha
//   //* dentro da qual foi clicada para o disparo de um evento: event.currentTarget
//   alert(
//     `Você o alvo deste evento foi: <${event.currentTarget.localName}>`
//   );

//   console.log(event);
// });

// Retorna a posição X e Y do elemento onde ocorreu o evento
// event.pageX, event.pageY

// Retorna qual foi a tecla pressionada: e.key ou event.key
// Exemplo 1:
// $("[name=bio]").keydown(function (e) {
//   console.log(e.key);
// });
//Exemplo 2:
// $("[name=bio]").keydown(function (e) {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     alert('Você pressionou a teclar "Enter"');
//   }
// });

// Retorna o código da tecla pressionada: e.keyCode ou event.keyCode ou e.which ou event.which
// $("[name=bio]").keydown(function (e) {
//   //* console.log(e.keyCode);

//   //* console.log(e.which);
// });

// Interrompe a execução padrão do evento: e.preventDefault()

// Interrompe a propagação de eventos: e.stopPropagation()
