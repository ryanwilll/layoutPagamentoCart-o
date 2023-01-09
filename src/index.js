const inputNome = document.querySelector("#nome-cartao");
const outputNome = document.querySelector("#nome-cartao-fix");
const inputNomeTexto = document.querySelector("#textoErro-Nome");
//
const inputNumeroCartao = document.querySelector("#numero-cartao-input");
const inputNumeroTexto = document.querySelector("#textoErro-Numero");
//
const inputDataValidadeMM = document.querySelector("#validade-mm");
const outputDataValidadeMM = document.querySelector("#validade-mm-fix");

const inputDataValidadeYY = document.querySelector("#validade-yy");
const outputDataValidadeYY = document.querySelector("#validade-yy-fix");
const inputDataValidadeTexto = document.querySelector("textoErro-Validade");
//
const inputCVC = document.querySelector("#cvc");
const inputCVCTexto = document.querySelector("#textoErro-cvc");
//
const botaoSubmit = document.querySelector(".btn-confirm");

inputNome.addEventListener("input", (e) => {
  document.querySelector("#nome-cartao-fix").textContent = e.target.value;
});

inputNumeroCartao.addEventListener("input", (e) => {
  let formattedNumber = e.target.value.toString().replace(/\d{4}(?=.)/g, "$& "); //place a space after every 4 characters
  document.querySelector("#numero-cartao-fix").textContent = formattedNumber;
});

inputDataValidadeMM.addEventListener("input", (e) => {
  document.querySelector("#validade-mm-fix").textContent = e.target.value;
});

inputDataValidadeYY.addEventListener("input", (e) => {
  document.querySelector("#validade-yy-fix").textContent = e.target.value;
});

inputCVC.addEventListener("input", (e) => {
  document.querySelector("#cvc-fix").textContent = e.target.value;
});

document.getElementById("nome-cartao").onkeypress = function (e) {
  var chr = String.fromCharCode(e.which);
  if (
    "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM ".indexOf(chr) < 0
  ) {
    alert(
      "Atenção, o campo nome, deve conter apenas letras. Sem caracteres especiais ou números"
    );
    return false;
  }
};
