const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Nome
    if (nome.length < 3) {
        alert("Digite seu nome completo.");
        return;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    // Telefone
    const telefoneLimpo = telefone.replace(/\D/g, "");

    if (telefoneLimpo.length < 10) {
        alert("Digite um telefone válido.");
        return;
    }

    // CPF
    const cpfLimpo = cpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
        alert("CPF inválido.");
        return;
    }

    // Senha
    if (senha.length < 8) {
        alert("A senha deve possuir no mínimo 8 caracteres.");
        return;
    }

    // Confirmar senha
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    const cpfInput = document.getElementById("cpf");

cpfInput.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g, "");

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = value;
});
 
    const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
        value = value.replace(
            /(\d{2})(\d{4})(\d{0,4})/,
            "($1) $2-$3"
        );
    } else {
        value = value.replace(
            /(\d{2})(\d{5})(\d{0,4})/,
            "($1) $2-$3"
        );
    }

    e.target.value = value;
    const form = document.querySelector("form"); form.addEventListener("submit",(e)=>{ e.preventDefault(); alert("Cadastro realizado com sucesso!"); });
     
});

  
    form.reset();
});