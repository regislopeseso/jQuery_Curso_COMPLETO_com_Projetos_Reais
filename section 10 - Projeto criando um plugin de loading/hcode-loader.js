(function ($) {
  $.fn.load = function (action = "load") {
    return this.each(function () {
      switch (action) {
        case "load":
          let divToAppend = document.createElement("div");

          divToAppend.id = "loader";

          $(divToAppend).css({
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            "text-align": "center",
            "background-color": "rgba(0, 0, 0, 0.4)",
          });

          let divLoad = document.createElement("div");
          divLoad.className = "lds-dual-ring";
          $(divLoad).css({
            position: "absolute",
            top: "50%",
            left: "50",
          });

          $(divToAppend).append(divLoad);

          $(this).append(divToAppend);
          break;

        case "unload":
          $("#loader").fadeOut(function () {
            $(this).remove();
          });
          break;

        default:
          console.error("Informe uma ação válida");
      }
    });
  };
})(jQuery);

//Estrutura básica de um plugin
// (function ($) {
//   $.fn.load = function () {
//     return this.each(function () {

//     });
//   };
// })(jQuery);
