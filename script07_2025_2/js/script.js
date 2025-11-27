// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-login");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorEmail = document.getElementById("error-email");
  const errorPassword = document.getElementById("error-password");
  const resultMessage = document.getElementById("result-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // impedir envio padrão

    // Limpar mensagens
    clearErrors();
    resultMessage.textContent = "";
    resultMessage.className = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // 1) Validar email de forma simples
    const emailValido = validateEmail(email);

    if (!emailValido) {
      errorEmail.textContent = "Informe um e-mail válido.";
    }

    // 2) Validar senha usando RECURSIVIDADE
    const passwordErrors = [];

    // Lista de regras (cada função recebe a senha e o array de erros)
    const rules = [
      function minLengthRule(pwd, errors) {
        if (pwd.length < 8) {
          errors.push("A senha deve ter pelo menos 8 caracteres.");
          return false;
        }
        return true;
      },
      function upperCaseRule(pwd, errors) {
        if (!/[A-Z]/.test(pwd)) {
          errors.push("A senha deve ter pelo menos uma letra maiúscula.");
          return false;
        }
        return true;
      },
      function numberRule(pwd, errors) {
        if (!/[0-9]/.test(pwd)) {
          errors.push("A senha deve ter pelo menos um número.");
          return false;
        }
        return true;
      }
    ];

    // Função recursiva que percorre as regras:
    function validateRulesRecursively(index, pwd, errorsList) {
      // Caso base: se o índice chegou no fim, terminou.
      if (index >= rules.length) {
        return true;
      }

      // Aplica a regra atual
      const currentRule = rules[index];
      const ok = currentRule(pwd, errorsList);

      // Se quiser parar na primeira falha, descomente:
      // if (!ok) return false;

      // Chamada recursiva para a próxima regra
      const nextOk = validateRulesRecursively(index + 1, pwd, errorsList);

      // Retorna true se todas as regras até aqui foram satisfeitas
      return ok && nextOk;
    }

    const senhaValida = validateRulesRecursively(0, password, passwordErrors);

    if (!senhaValida) {
      // juntar todas as mensagens em uma string
      errorPassword.innerHTML = passwordErrors.join("<br>");
    }

    // Se email e senha passaram, "finge" sucesso de login
    if (emailValido && senhaValida) {
      resultMessage.textContent = "Login realizado com sucesso (simulação)!";
      resultMessage.classList.add("success");

      // Aqui você poderia redirecionar, por exemplo:
      // window.location.href = "dashboard.html";
    } else {
      resultMessage.textContent =
        "Verifique os campos destacados e tente novamente.";
      resultMessage.classList.add("error");
    }
  });

  function clearErrors() {
    errorEmail.textContent = "";
    errorPassword.textContent = "";
  }

  // Validação simples de e-mail (para fins didáticos)
  function validateEmail(email) {
    if (email.length === 0) return false;
    // expressão regular simples só para exemplo
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
