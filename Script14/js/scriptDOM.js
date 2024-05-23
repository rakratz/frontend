// Selecionando o parágrafo pelo ID
let paragrafo = document.getElementById('meuParagrafo');

// Selecionando o botão pelo ID
let  botao = document.getElementById('meuBotao');

// Adicionando um ouvinte de evento para o clique no botão
 botao.addEventListener('click', function() {
    // Alterando o texto do parágrafo quando o botão é clicado
    paragrafo.textContent = 'O texto foi alterado!';
});
