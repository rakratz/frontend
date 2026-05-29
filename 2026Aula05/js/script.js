// Variáveis para armazenar os elementos do formulário
const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const numero = document.getElementById('numero');
const mensagem = document.getElementById('mensagem');
const senha = document.getElementById('senha');

// Resultados
const saudacao = document.getElementById('saudacao');
const idadeResultado = document.getElementById('idadeResultado');
const numeroResultado = document.getElementById('numeroResultado');
const contador = document.getElementById('contador');
const senhaResultado = document.getElementById('senhaResultado');

// Botão
const temaBtn = document.getElementById('temaBtn');

// NOME EM TEMPO REAL
nome.addEventListener('input', function() {

    saudacao.textContent = `Olá, ${nome.value}!`;

});

// VALIDAÇÃO DE IDADE
idade.addEventListener('input', function() {
    if(Number(idade.value) >= 18) {
        idadeResultado.textContent = 'Maior de idade';
    } else {
        idadeResultado.textContent = 'Menor de idade';
    }
});

// NÚMERO POSITIVO OU NEGATIVO
numero.addEventListener('input', function() {
    if(Number(numero.value) > 0) {
        numeroResultado.textContent = 'Número positivo';
    } else if(Number(numero.value) < 0) {
        numeroResultado.textContent = 'Número negativo';
    } else {
        numeroResultado.textContent = 'Número zero';
    }
});

// CONTADOR DE CARACTERES
mensagem.addEventListener('input', function() {
    contador.textContent =
        `Caracteres digitados: ${mensagem.value.length}`;
});

// Força a senha 
senha.addEventListener('input', function() {
    if(senha.value.length < 4) {
        senhaResultado.textContent = 'Senha fraca';
    } else if(senha.value.length < 8) {
        senhaResultado.textContent = 'Senha média';
    } else {
        senhaResultado.textContent = 'Senha forte';
    }
});

// DARK MODE
temaBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// RELÓGIO
function atualizarRelogio() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    document.getElementById('relogio').textContent = hora;
}


setInterval(atualizarRelogio, 1000);