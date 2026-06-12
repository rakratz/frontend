// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o formulário
    const formulario = document.querySelector("form");

    // Evento executado ao enviar o formulário
    formulario.addEventListener("submit", function(event) {

        // Obtém o valor do campo nome
        const nome = document.getElementById("nome").value;

        // Verifica se o nome possui pelo menos 3 caracteres
        if (nome.length < 3) {

            alert("O nome deve possuir pelo menos 3 caracteres.");

            // Impede o envio do formulário
            event.preventDefault();

        } else {

            alert("Cadastro realizado com sucesso!");

        }
    });

});