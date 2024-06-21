/* alert("teste")*/

// Seleciona os elementos do formulário e campos de entrada pelo ID
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o envio do formulário para permitir a validação
  checkForm(); // Chama a função de verificação do formulário
});

// Função para verificar todos os campos do formulário
function checkForm() {
  let isValid = true;

  // Função para exibir mensagens de erro
  function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message; // Define a mensagem de erro
    formItem.className = "form-content error"; // Adiciona a classe de erro ao item do formulário
    isValid = false;
  }

  // Função para remover mensagens de erro
  function clearError(input) {
    const formItem = input.parentElement;
    formItem.className = "form-content"; // Remove a classe de erro do item do formulário
  }

  // Verifica os campos de entrada e exibe mensagens de erro se necessário
  if (username.value === "") {
    errorInput(username, "Preencha um username!");
  } else {
    clearError(username);
  }

  if (email.value === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    clearError(email);
  }

  if (password.value === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (password.value.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    clearError(password);
  }

  if (passwordConfirmation.value === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmation.value !== password.value) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    clearError(passwordConfirmation);
  }

  // Exibe uma mensagem de sucesso e limpa o formulário se todos os campos forem válidos
  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
    clearForm();
  }
}

// Função para limpar os campos do formulário
function clearForm() {
  username.value = "";
  email.value = "";
  password.value = "";
  passwordConfirmation.value = "";
  
  // Remove as classes de erro dos itens do formulário
  const formItems = form.querySelectorAll(".form-content");
  formItems.forEach(item => {
    item.className = "form-content";
  });
}
