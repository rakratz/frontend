// Script de Login de usuário fixo

// Variáveis de controle
const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// dados de login fixos
const fixedUsername = 'admin';  
const fixedPassword = 'Aluno123'

// Validar o login
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

   // Limpar as mensagens de erro
   errorMessage.textContent = '';
   errorMessage.classList.remove('error', 'successo');

   // Obter os valores dos campos de entrada
   const username = usernameInput.value.trim();
   const password = passwordInput.value.trim();

   // Verificar se os campos estão preenchidos
   if (username === '' || password === '') {
       errorMessage.textContent = 'Por favor, preencha todos os campos.';
       errorMessage.classList.add('error');
       return;
   }

   // Verificar se o usuário e senha estão corretos
    if (username === fixedUsername && password === fixedPassword) {
         errorMessage.textContent = 'Login bem-sucedido!';
         errorMessage.classList.add('successo');
         // Redirecionar ou realizar outra ação após o login bem-sucedido
         window.location.href = 'dashboard.html'; // Exemplo de redirecionamento
    } else {
         errorMessage.textContent = 'Usuário ou senha incorretos.';
         errorMessage.classList.add('error');
    }
});