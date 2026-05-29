const form = document.getElementById("formLogin");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");


    // Validação tamanho senha
    if(senha.length < 6){
        mensagem.innerHTML = "Senha deve possuir pelo menos 6 caracteres";
        mensagem.style.color = "red";
        return;
    }

    // Login estático
    if(email === "admin@gmail.com" && senha === "123456"){

        localStorage.setItem("usuarioLogado", "admin");

        mensagem.innerHTML = "Login realizado com sucesso";
        mensagem.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    }else{

        mensagem.innerHTML = "Usuário ou senha inválidos";
        mensagem.style.color = "red";
    }

});
