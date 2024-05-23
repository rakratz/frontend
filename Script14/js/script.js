function validarFormulario() {
    // Capturando os valores dos campos do formulário
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // Validando se os campos estão preenchidos
    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }

    if (email.trim() === '') {
        alert('Por favor, preencha o campo E-mail.');
        return false;
    }

    if (senha.trim() === '') {
        alert('Por favor, preencha o campo Senha.');
        return false;
    }

    // Validando o formato do e-mail
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    // Validando a senha (pode adicionar mais regras de validação aqui, como tamanho mínimo)
    if (senha.length < 6) {
        alert('A senha deve conter no mínimo 6 caracteres.');
        return false;
    }

    // Se a validação passar, o formulário é submetido
    return true;
}


