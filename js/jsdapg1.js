var tentativas = 0;
var bloqueado = false;

// Função para trocar dinamicamente a imagem do banner
function trocarBanner() {
    var bannerImg = document.getElementById("logoImg");
    bannerImg.src = "novobanner.jpg";
}

// Função para limpar todos os campos do formulário
function limparCampos() {
    document.getElementById("NOME").value = "";
    document.getElementById("CPF").value = "";
    document.getElementById("EMAIL").value = "";
    document.getElementById("SENHA").value = "";
}

// Função para validar e formatar automaticamente o CPF
function validarCPF() {
    var cpfInput = document.getElementById("CPF");
    var cpf = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        alert("CPF inválido. Por favor, insira 11 números.");
        cpfInput.value = "";
        return;
    }

    // Verifica se todos os dígitos do CPF são iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) {
        alert("CPF inválido. Todos os números são iguais.");
        cpfInput.value = "";
        return;
    }

    // Validação do CPF
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
        alert("CPF inválido.");
        cpfInput.value = "";
        return;
    }

    soma = 0;
    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
        alert("CPF inválido.");
        cpfInput.value = "";
        return;
    }

    // Formatação do CPF (###.###.###-##)
    cpfInput.value = cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
}

// Adiciona evento de input para validar e formatar automaticamente o CPF
document.getElementById('CPF').addEventListener('input', validarCPF);

// Adiciona evento de clique ao botão de login
document.getElementById("loginButton").addEventListener("click", function (event) {
    // Se o formulário estiver bloqueado, não permitir o envio
    if (bloqueado) {
        alert("Você excedeu o limite de tentativas. Tente novamente em 30 segundos.");
        event.preventDefault();
        return;
    }

    // Incrementa o número de tentativas
    tentativas++;

    // Se exceder o limite de tentativas, bloqueia o formulário por 30 segundos
    if (tentativas >= 3) {
        bloqueado = true;
        setTimeout(function () {
            bloqueado = false;
            tentativas = 0;
        }, 30000); // 30 segundos em milissegundos
    }

    // Validar campos antes de enviar o formulário
    var nomeInput = document.getElementById("NOME");
    var emailInput = document.getElementById("EMAIL");
    var senhaInput = document.getElementById("SENHA");
    var cpfInput = document.getElementById("CPF");

    if (nomeInput.value === "" || emailInput.value === "" || senhaInput.value === "" || cpfInput.value === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
    }

    document.cookie = `NOME=${nomeInput.value};`;
    document.cookie = `EMAIL=${emailInput.value};`;
    document.cookie = `SENHA=${senhaInput.value};`;
    document.cookie = `CPF=${cpfInput.value};`;
});
