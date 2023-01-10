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

inputNome.addEventListener("input", (eventNome) => {
  if (eventNome.target.value === "") {
    document.querySelector("#nome-cartao-fix").textContent = "JANE APPLESEED";
  } else {
    document.querySelector("#nome-cartao-fix").textContent =
      eventNome.target.value;
  }
});

inputNumeroCartao.addEventListener("input", (eventNumero) => {
  let formattedNumber = eventNumero.target.value
    .toString()
    .replace(/\d{4}(?=.)/g, "$& "); //place a space after every 4 characters

  if (eventNumero.target.value === "") {
    document.querySelector("#numero-cartao-fix").textContent =
      "0000 0000 0000 0000";
  } else {
    document.querySelector("#numero-cartao-fix").textContent = formattedNumber;
  }
});

inputDataValidadeMM.addEventListener("input", (eventMM) => {
  if (eventMM.target.value === "") {
    document.querySelector("#validade-mm-fix").textContent = "00";
  } else {
    document.querySelector("#validade-mm-fix").textContent =
      eventMM.target.value;
  }
});

inputDataValidadeYY.addEventListener("input", (eventYear) => {
  if (eventYear.target.value === "") {
    document.querySelector("#validade-yy-fix").textContent = "00";
  } else {
    document.querySelector("#validade-yy-fix").textContent =
      eventYear.target.value;
  }

  if (e.target.value >= 25) {
    document
      .querySelector(".mensagem-erro.invisivel")
      .classList.remove("invisivel");
  }
});

inputCVC.addEventListener("input", (e) => {
  if (e.target.value === "") {
    document.querySelector("#cvc-fix").textContent = "000";
  } else {
    document.querySelector("#cvc-fix").textContent = e.target.value;
  }
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
