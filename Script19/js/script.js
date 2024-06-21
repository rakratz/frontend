/* alert("teste")*/

// Seleciona os elementos do formulário e campos de entrada pelo ID
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Previne o envio do formulário para permitir a validação
  /* alert("CADASTRADO COM SUCESSO!")
    checkInputUsername()  */
  checkForm(); // Chama a função de verificação do formulário
})
// Adiciona ouvintes de eventos para a perda de foco nos campos de email e username
email.addEventListener("blur", () => {
  checkInputEmail();  // Chama a função de verificação do email
})


username.addEventListener("blur", () => {
  checkInputUsername(); // Chama a função de verificação do username
})

// Função para verificar o campo de username
function checkInputUsername(){
  const usernameValue = username.value;

  console.log(usernameValue)
  if(usernameValue === ""){
    errorInput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}
// Função para verificar o campo de email
function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.") // Chama a função de erro se o campo estiver vazio
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content" // Remove a classe de erro se o campo estiver preenchido
  }


}

// Função para verificar o campo de senha
function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "A senha é obrigatória.") // Chama a função de erro se o campo estiver vazio
  }else if(passwordValue.length < 8){
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.") // Chama a função de erro se a senha for muito curta
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content" // Remove a classe de erro se o campo estiver preenchido corretamente
  }


}

// Função para verificar a confirmação de senha
function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.") // Chama a função de erro se o campo estiver vazio
  }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais.") // Chama a função de erro se as senhas não coincidem
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content" // Remove a classe de erro se as senhas coincidirem
  }


}

// Função para verificar todos os campos do formulário
function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

 // Seleciona todos os itens do formulário
  const formItems = form.querySelectorAll(".form-content")

  // Verifica se todos os itens do formulário não possuem a classe de erro
  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  // Exibe uma mensagem de sucesso se o formulário for válido
  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
    clearForm(); // Chama a função para limpar o formulário após o cadastro bem-sucedido
  }

}

// Função para exibir mensagens de erro
function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message; // Define a mensagem de erro

  formItem.className = "form-content error" // Adiciona a classe de erro ao item do formulário

}// Limpa os campos
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