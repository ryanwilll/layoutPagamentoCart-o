document.querySelector("#nome-cartao").oninvalid = function (evt) {
  // essa linha cancela o comportamento padrão do navegador
  evt.preventDefault();
  // faz a validação novamente
  if (!this.validity.valid) {
    //aqui eu mostro o alert
    alert("O campo nome é obrigatório!");
  }
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
    alert("Apenas letras");

    return false;
  }
  return true;
}
