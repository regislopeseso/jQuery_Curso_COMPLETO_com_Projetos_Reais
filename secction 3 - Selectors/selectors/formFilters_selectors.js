//! Selectors: form filters
// Selecionando um botão
// $('#register :button').text()

// Selecionando um checkbox
// $('#register :checkbox').trigger('click')

// Selecionando os elementos "checked"
// $('input:checked').val()

// Ex.:
// $("[type=radio]").change(function () {
//   let value = $("input:checked").val();
//   let gender = value == "M" ? "Masculino" : "Feminino";

//   alert(`Você selecionou o sexo: ${gender}`);
// });

// Selecionando elementos desabilitados
// ex.:1 -> $("#register :disabled").prop("disabled", false);
// ex.:2 -> $('#register :disabled').val('anthony@hcode.com.br').prop('disabled', false)

// Secionando o botão de "submit"
// $('#register:submit').css('background-color', 'red');

// Ex.:
//  $("#register :submit").click(function (event) {
//   event.preventDefault();
//   alert("Data successfully submitted");
//  });
