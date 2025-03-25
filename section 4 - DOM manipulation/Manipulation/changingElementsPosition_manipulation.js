//! Manipulation: reading and changing the elements position
// Usando .offset()
// Reading:
// $('form .field:eq(1)').offset();

// Changing
// $('form .field:eq(1)').offset({
//   top: 500,
//   left: 500
//   });

// Usando .position()
// Difere-se do .offset() porque refere-se à tag do elemento "pai"
// Reading
// $('form .field:eq(1)').position();

// Changing
// $('form .field:eq(1)').position({
//  top: 100,
//  left: 100,});

// Manipulando a posição da barra de rolagem vetical:
// Reading: $(document).scrollTop();
// Changing: $(document).scrollTop(200);

// Manipulando a posição da barra de rolagem horizontal:
// Reading: $(document).scrollLeft();
// Changing: $(document).scrollLeft(200);
