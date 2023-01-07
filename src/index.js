const inputNome = document.querySelector("#nome-cartao");
const inputNomeTexto = document.querySelector("#textoErro-Nome");
//
const inputNumeroCartao = document.querySelector("#numero-cartao-input");
const inputNumeroTexto = document.querySelector("#textoErro-Numero");
//
const inputDataValidadeMM = document.querySelector("#validade-mm");
const inputDataValidadeYY = document.querySelector("#validade-yy");
const inputDataValidadeTexto = document.querySelector("textoErro-Validade");
//
const inputCVC = document.querySelector("#cvc");
const inputCVCTexto = document.querySelector("#textoErro-cvc");

document.getElementById("nome-cartao").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0) {
    alert(
      "Atenção, o campo nome, deve conter apenas letras. Sem caracteres especiais ou números"
    );
    return false;
  }
};
