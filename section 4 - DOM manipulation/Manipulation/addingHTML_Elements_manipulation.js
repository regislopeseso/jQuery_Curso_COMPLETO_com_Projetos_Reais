//! Manipulation: adding HTML elements

// Adicionando um elemento ao FINAL
// $(".menu ul").append('<li><a href="#">News</a></li>');

// Adicionando um elemento ao FINAl de outro por meio de uma sintaxe difente
// $('<li><a href="#">News 2</a>').appendTo(".menu ul");

// Adicionando um elemento no INÍCIO:
// $('.menu ul').prepend('<li><a href="#">Products</a></li>');
// $('<li><a href="#">News 2</a></li>').prependTo(".menu ul");

// Adicionando um elemento no INÍCIO de outro por meio de uma sintaxe difente
// $('<li><a href="#">News 2</a></li>').prependTo(".menu ul");

// Adicionando um elemento após outro:
// $(".menu ul").after('<li><a href="#">News</a></li>');
// $(".paragrafo").after("<h2>Hcode Treinamentos</h2>");

// Adicionando um elemento após outro, sintaxe alternativa:
// $('<h2>Hcode Treinamentos 2</h2>').insertAfter('.paragrafo');

// Adicionando um elemento antes de outro:
// $(".paragrafo").before("<h2>Hcode Treinamentos 3</h2>");

// Adicionando um elemento antes de outro, sintaxe alternativa:
// $("<h2>Hcode Treinamentos 3</h2>").insertBefore(".paragrafo");

// Adicionando um elemento em volta de outros (modifica li)
// $(".cars_list li").wrap("<i></i>");
// $(".cars_list li").wrap("<b></b>");

// Adicionando um elemento em volta de outros (modifica o conteúdo)
// $(".cars_list li").wrapInner("<u></u>");

// Removendo os elementos que envolvem (não pode passar nenhum parâmetro na função unwrap())
// $('.cars_list li').unwrap()

// Removendo elementos (remove o elemento <li>)
// $('.cars_list li:eq(2)').remove()

// Removendo elementos (atribui vazio ao elemento <li>)
// $('.cars_list li:eq(2)').empty()

// Removendo um elemento, mas mantendo seus eventos associados
// $(".paragrafo").click(function () {
//   $(this).html("Você clicou em mim!");
// });

// let txt = $(".paragrafo").detach();

// $("section main p").before(txt);
