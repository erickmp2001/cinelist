const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const generoInput = document.querySelector("#genero")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // Verifica se o e-mail está preenchido e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

    // Verifica se o gênero foi selecionado
    if (generoInput.value === "") {
        alert("Por favor, preencha o campo de gênero");
        return;
    }

    // Se todos os forms estiverem corretamente preenchidos, envie o form
    form.submit();
    alert("Cadastro realizado com sucesso!!!");
        return;
})

// função que valida o e-mail
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/  // usuario123@host.com.br
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}