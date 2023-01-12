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
  const regex = /[0-9]/;
  //Se o nome estiver preenchido
  if (inputNome.value === "") {
    inputNomeTexto.innerHTML = "Campo em branco, preencha-o";
    inputNomeTexto.classList.remove("invisivel");
    return;
  } else if (regex.test(inputNome.value) === true) {
    inputNomeTexto.innerHTML =
      "Você inseriu números no nome, por favor, remova-os e tente novamente.";
    inputNomeTexto.classList.remove("invisivel");
    return;
  } else if (qtdNome() === false) {
    inputNomeTexto.innerHTML =
      "Hmmn, parece que seu nome está muito curto, por favor, complete.";
    inputNomeTexto.classList.remove("invisivel");
    return;
  }
  {
    inputNomeTexto.classList.add("invisivel");
  }

  //Se o campo número estiver preenchido corretamente preenchidos
  if (qtdNumero() === false) {
    inputNumeroTexto.innerHTML =
      "Esse cartão não é válido. O Número de caracteres deve ser igual a 16";
    inputNumeroTexto.classList.remove("invisivel");
    return;
  }
  {
    inputNumeroTexto.classList.add("invisivel");
  }

  //Validar validades do cartão
  if (inputDataValidadeYY.value === "") {
    inputDataValidadeTexto.innerHTML =
      "A data de validade do campo ano não pode está vázio.";
    inputNumeroTexto.classList.remove("invisivel");
    return;
  } else if (inputDataValidadeYY.value < 23 || inputDataValidadeYY.value > 30) {
    inputDataValidadeTexto.innerHTML =
      "Os números informados são inválidos, cartões validos do ano de 2023 a 2030.";
    inputDataValidadeTexto.classList.remove("invisivel");
    return;
  } else if (inputDataValidadeMM.value < 0 || inputDataValidadeMM.value > 12) {
    inputDataValidadeTexto.innerHTML =
      "Os números informados são inválidos, cartões validos do mes de 01 a 12.";
    inputDataValidadeTexto.classList.remove("invisivel");
    return;
  }
  {
    inputDataValidadeTexto.classList.add("invisivel");
  }

  //Validar CVC
  if (inputCVC.value === "") {
    inputCVCTexto.innerHTML =
      "Os números informados são inválidos, é necessário 3 digitos.";
    inputCVCTexto.classList.remove("invisivel");
    return;
  }
  inputCVCTexto.classList.add("invisivel");
  complete();
  completeBtn.addEventListener("click", (submit) => {
    form.submit();
  });
});

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
    numeroyy.value.length < 2 ||
    numeroyy.value < 23 ||
    numeromm.value > 12 ||
    numeroyy.value > 30 ||
    numeromm.value < 1
  ) {
    return false;
  }
}
