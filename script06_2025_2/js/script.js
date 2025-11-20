const form = document.getElementById("cadastroForm");
const successMessage = document.getElementById("successMessage");
const limparBtn = document.getElementById("limparBtn");

const campos = {
  nome: document.getElementById("nome"),
  email: document.getElementById("email"),
  idade: document.getElementById("idade"),
  senha: document.getElementById("senha"),
  confirmarSenha: document.getElementById("confirmarSenha"),
  termos: document.getElementById("termos"),
};

function mostrarErro(input, mensagem) {
  const grupo = input.closest(".form-group");
  const spanErro = grupo.querySelector(".error-message");
  if (mensagem) {
    grupo.classList.add("error");
    spanErro.textContent = mensagem;
  } else {
    grupo.classList.remove("error");
    spanErro.textContent = "";
  }
}

function validarNome() {
  const valor = campos.nome.value.trim();
  if (valor === "") {
    mostrarErro(campos.nome, "Informe seu nome.");
    return false;
  }
  mostrarErro(campos.nome, "");
  return true;
}

function validarEmail() {
  const valor = campos.email.value.trim();
  if (valor === "") {
    mostrarErro(campos.email, "Informe seu e-mail.");
    return false;
  }
  const regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(valor)) {
    mostrarErro(campos.email, "Digite um e-mail válido.");
    return false;
  }
  mostrarErro(campos.email, "");
  return true;
}

function validarIdade() {
  const valor = campos.idade.value.trim();
  if (valor === "") {
    mostrarErro(campos.idade, "");
    return true; // idade é opcional
  }
  const numero = Number(valor);
  if (isNaN(numero) || numero < 0) {
    mostrarErro(campos.idade, "Informe uma idade válida (número ≥ 0).");
    return false;
  }
  mostrarErro(campos.idade, "");
  return true;
}

function validarSenha() {
  const valor = campos.senha.value;
  if (valor.length < 6) {
    mostrarErro(campos.senha, "A senha deve ter pelo menos 6 caracteres.");
    return false;
  }
  mostrarErro(campos.senha, "");
  return true;
}

function validarConfirmarSenha() {
  const senha = campos.senha.value;
  const confirmar = campos.confirmarSenha.value;
  if (confirmar === "") {
    mostrarErro(campos.confirmarSenha, "Repita a senha.");
    return false;
  }
  if (senha !== confirmar) {
    mostrarErro(campos.confirmarSenha, "As senhas não conferem.");
    return false;
  }
  mostrarErro(campos.confirmarSenha, "");
  return true;
}

function validarTermos() {
  if (!campos.termos.checked) {
    mostrarErro(campos.termos, "Você precisa aceitar os termos.");
    return false;
  }
  mostrarErro(campos.termos, "");
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede envio real, para fins de exemplo

  const valido =
    validarNome() &
    validarEmail() &
    validarIdade() &
    validarSenha() &
    validarConfirmarSenha() &
    validarTermos();

  if (valido) {
    successMessage.classList.add("visible");
    console.log("Formulário válido. Enviando dados...");
  } else {
    successMessage.classList.remove("visible");
  }
});

// Validação em tempo real (ao sair do campo)
campos.nome.addEventListener("blur", validarNome);
campos.email.addEventListener("blur", validarEmail);
campos.idade.addEventListener("blur", validarIdade);
campos.senha.addEventListener("blur", validarSenha);
campos.confirmarSenha.addEventListener("blur", validarConfirmarSenha);
campos.termos.addEventListener("change", validarTermos);

// Botão "Limpar"
limparBtn.addEventListener("click", () => {
  form.reset();
  successMessage.classList.remove("visible");
  document
    .querySelectorAll(".form-group")
    .forEach((g) => g.classList.remove("error"));
  document
    .querySelectorAll(".error-message")
    .forEach((s) => (s.textContent = ""));
});
