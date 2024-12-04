document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    let errorMessage = '';

    // Limpa mensagens anteriores
    resultado.textContent = '';
    resultado.className = ''; 
    document.getElementById('email').classList.remove('erro');
    document.getElementById('confirmEmail').classList.remove('erro');

    if (!validaEmail(email)) {
      errorMessage = 'O e-mail fornecido não é válido.';
      document.getElementById('email').classList.add('erro');
    } else if (!validaEmail(confirmEmail)) {
      errorMessage = 'O e-mail de confirmação não é válido.';
      document.getElementById('confirmEmail').classList.add('erro');
    } else if (email !== confirmEmail) {
      errorMessage = 'Os e-mails não são iguais.';
      document.getElementById('confirmEmail').classList.add('erro');
    }

    if (errorMessage) {
      // Exibe o erro
      resultado.textContent = errorMessage;
      resultado.classList.add('erro');
      // Focar no campo que tem o erro
      if (document.getElementById('email').classList.contains('erro')) {
        document.getElementById('email').focus();
      } else {
        document.getElementById('confirmEmail').focus();
      }
    } else {
       // Tudo certo
      resultado.textContent = 'Os e-mails foram validados com sucesso e são iguais!';
      resultado.classList.add('sucesso');
    }
  });

function validaEmail(email) {
  // A expressão regular agora garante que o domínio tenha pelo menos dois caracteres após o ponto.
  const regex = /\S+@\S+\.\S{2,}/;
  return regex.test(email);
}

});
