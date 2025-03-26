//! Events: the .trigger() method

//* Disparando um evento manualmente
// Exemplo 1:
// $('h1').trigger('dblclick');

// Exemplo 2:
// $('#form_login').on('submit', function(event){
//   event.preventDefault();
//   console.log('Aqui estão os valores do formulário', $(this).serializedArray());
// });

// $('#form_login [name=bio]').on('blur', function(e){
//   $(e.target.form).trigger('submit');
// });
