// Script de validação de formuário

// Constantes
const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senhaConfirmacao = document.getElementById('senhaConfirmacao');
const mensagem = document.getElementById('mensagem');

// Criar a função que será chamada ao enviar o formulário
function validarFormulario(event) {
  event.preventDefault(); // Impede o envio do formulário

  mensagem.textContent = '';
  mensagem.className = 'mensagem';

  if (nome.value.trim() === '') {
    mensagem.textContent = 'O campo Nome é obrigatório.';
    mensagem.classList.add('erro');
    return;
  }

  if (email.value.trim() === '') {
    mensagem.textContent = 'O campo Email é obrigatório.';
    mensagem.classList.add('erro');
    return;
  } 
  
  if (!email.value.includes('@') || !email.value.includes('.')) {
    mensagem.textContent = 'O Email informado não é válido.';
    mensagem.classList.add('erro');
    return;
  }

  if (senha.value.trim() === '') {
    mensagem.textContent = 'O campo Senha é obrigatório.';
    mensagem.classList.add('erro');
    return;
  } 
  
  // Verifica se a senha tem pelo menos 6 caracteres
  if (senha.value.length < 6) {
    mensagem.textContent = 'A Senha deve ter pelo menos 6 caracteres.';
    mensagem.classList.add('erro');
    return;
  }

  // complexidade da senha
  const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  if (!regexSenha.test(senha.value)) {
    mensagem.textContent = 'A Senha deve conter pelo menos uma letra maiúscula e uma letra minúscula.';
    mensagem.classList.add('erro');
    return;
  }

  if (senhaConfirmacao.value.trim() === '') { 
    mensagem.textContent = 'O campo Confirmação de Senha é obrigatório.';
    mensagem.classList.add('erro');
    return;
  }

  if (senha.value !== senhaConfirmacao.value) {
    mensagem.textContent = 'As senhas não coincidem.';
    mensagem.classList.add('erro');
    return;
  }

  mensagem.textContent = 'Dados preenchidos corretamente.';
  mensagem.classList.add('sucesso');

  // Alerta simulado o envio do formulário
  alert(
    'Formulário enviado com sucesso!\n\n'+
    'Nome: ' + nome.value + '\n' +
    'Email: ' + email.value + '\n' +
    'Senha: ' + senha.value + '\n' +
    'Confirmação de Senha: ' + senhaConfirmacao.value);
}

formulario.addEventListener('submit', validarFormulario);

