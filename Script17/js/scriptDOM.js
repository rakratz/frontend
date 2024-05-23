let paragrafo = document.getElementById('meuParagrafo');

console.log(paragrafo);

let  botao = document.getElementById('meuBotao');

console.log(botao);

 botao.addEventListener('click', function() {
    paragrafo.textContent = 'O texto foi alterado!';
});
