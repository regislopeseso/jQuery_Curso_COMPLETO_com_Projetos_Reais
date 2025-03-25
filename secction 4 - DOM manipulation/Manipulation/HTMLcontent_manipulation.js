//! Manipulation: altering the HTML content of an element
// Retornando o conteúdo HTML de um element: .html
// $("header .menu li:eq(1)").html(); // Retorna apenas o primeiro elmento li

// Define o conteúdo HTML de um elemento: .html()
// $("header .menu li:eq(1)").html('<a href="https://www.hcode.com.br">Home</a>');

// Retorna um ou mais conteúdos de uma tag (consegue ler também xml): .text()
// $("header .menu li:eq(1)").text();

// Retorna um ou mais conteúdos de texto contido(s) em tag(s) (consegue ler também xml): .text()
// $("header .menu li:eq(1)").text(); // Retorna todos os li

// Define um novo conteúdo de texto de uma tag: .text()
// $("header .menu li:eq(2) a").text("Hcode treinamentos");

// Redefinindo o conteúdo de um elemento: .replaceWith
// $("form button").replaceWith(
//   '<h4 style="color: red; text-align: center">Registre-se</h4>'
// );

// Redefinindo o conteúdo de um elemento (sintaxe alternativa): .replaceAll
// $('<h4 style="color: red; text-align: center">Registre-se</h4>').replaceAll(
//   "form button"
// );
