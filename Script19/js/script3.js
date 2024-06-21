document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores dos campos
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordConfirmation = document.getElementById('password-confirmation').value.trim();

    // Variável para rastrear se o formulário é válido
    let isValid = true;

    // Limpar mensagens de erro
    const errorMessages = document.querySelectorAll('a');
    errorMessages.forEach(msg => msg.textContent = '');

    // Validar campos obrigatórios
    if (username === '') {
        document.querySelector('label[for="username"] + a').textContent = 'Nome do usuário é obrigatório.';
        isValid = false;
    }
    if (email === '') {
        document.querySelector('label[for="email"] + a').textContent = 'Email é obrigatório.';
        isValid = false;
    }
    if (password === '') {
        document.querySelector('label[for="password"] + a').textContent = 'Senha é obrigatória.';
        isValid = false;
    }
    if (passwordConfirmation === '') {
        document.querySelector('label[for="password-confirmation"] + a').textContent = 'Confirmação de senha é obrigatória.';
        isValid = false;
    }

    // Validar comprimento da senha
    if (password.length < 8) {
        document.querySelector('label[for="password"] + a').textContent = 'A senha deve ter pelo menos 8 dígitos.';
        isValid = false;
    }

    // Validar se a senha e a confirmação de senha são iguais
    if (password !== passwordConfirmation) {
        document.querySelector('label[for="password-confirmation"] + a').textContent = 'As senhas não são iguais.';
        isValid = false;
    }

    // Se o formulário for válido, exibir mensagem de sucesso
    if (isValid) {
        alert('Cadastrado com sucesso!');
    }
});
