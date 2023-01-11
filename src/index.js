const form = document.querySelector("#form");
const completeBtn = document.querySelector("#complete-btn");
//
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
const inputDataValidadeTexto = document.querySelector("#textoErro-Validade");
//
const inputCVC = document.querySelector("#cvc");
const inputCVCTexto = document.querySelector("#textoErro-cvc");
//
const botaoSubmit = document.querySelector(".btn-confirm");
//
const closeBtn = document.querySelector("#close-aviso");

closeBtn.addEventListener("click", (closeAviso) => {
  document.getElementById("msg-aviso").style.display = "none";
});

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
    return false;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Se o nome estiver preenchido
  if (inputNome.value === "" || qtdNome() === false) {
    inputNomeTexto.classList.remove("invisivel");
    return;
  }
  {
    inputNomeTexto.classList.add("invisivel");
  }

  if (inputNumeroCartao.value === "" || qtdNumero() === false) {
    //Se todos os campos estiverem preenchidos
    inputNumeroTexto.classList.remove("invisivel");
    return;
  }
  {
    inputNumeroTexto.classList.add("invisivel");
  }

  //Validar validades do cartão
  if (
    inputDataValidadeYY.value === "" ||
    inputDataValidadeMM.value === "" ||
    isNumber(inputDataValidadeMM.value) ||
    isNumber(inputDataValidadeYY.value) ||
    qtdValidade() === false
  ) {
    inputDataValidadeTexto.classList.remove("invisivel");
    return;
  }
  {
    inputDataValidadeTexto.classList.add("invisivel");
  }

  //Validar CVC
  if (inputCVC.value === "" || qtdCVC() === false) {
    inputCVCTexto.classList.remove("invisivel");
    return;
  }
  inputCVCTexto.classList.add("invisivel");
  complete();
  completeBtn.addEventListener("click", (submit) => {
    form.submit();
  });
});

function isNumber() {
  const numberRegex = new RegExp(/^[0-9]/);

  if (numberRegex.test(inputNumeroCartao)) {
    return true;
  }
  return false;
}

function complete() {
  (document.getElementById("form").style.display = "none"),
    (document.getElementById("complete").style.display = "block");
}

function qtdNome() {
  var nome = document.getElementById("nome-cartao");
  if (nome.value.length < 8) {
    return false;
  }
}
function qtdNumero() {
  var numero = document.getElementById("numero-cartao-input");
  if (numero.value.length < 16) {
    return false;
  }
}
function qtdValidade() {
  var numeromm = document.getElementById("validade-mm");
  var numeroyy = document.getElementById("validade-yy");
  if (
    numeromm.value.length < 2 ||
    numeroyy.value < 2 ||
    numeromm.value > 12 ||
    numeroyy.value > 25
  ) {
    return false;
  }
}
function qtdCVC() {
  var cvc = document.getElementById("cvc");
  if (cvc.value.length < 3) {
    return false;
  }
}
