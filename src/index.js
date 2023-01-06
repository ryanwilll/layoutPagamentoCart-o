// document.querySelector("#nome-cartao").oninvalid = function (evt) {
//   // essa linha cancela o comportamento padrão do navegador
//   evt.preventDefault();
//   // faz a validação novamente

//   if (!this.validity.valid) {
//     //aqui eu mostro o alert
//     alert("AB");
//   }
// };

document.getElementById("nome-cartao").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
    return false;
};

function lettersOnly(evt) {
  evt = evt ? evt : event;
  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
    ? evt.keyCode
    : evt.which
    ? evt.which
    : 0;
  if (
    charCode > 31 &&
    (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)
  ) {
    return false;
  }
  return true;
}
function numberOnly(evt) {
  evt = evt ? evt : event;

  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
    ? evt.keyCode
    : evt.which
    ? evt.which
    : 0;
  if (charCode < 48 || charCode > 57) {
    alert("Numeros");

    return false;
  }
  return true;
}
