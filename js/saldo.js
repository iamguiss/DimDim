
let saldo = localStorage.getItem('saldo') ? parseFloat(localStorage.getItem('saldo')) : 0;
let transacoes = localStorage.getItem('transacoes') ? JSON.parse(localStorage.getItem('transacao')) : [0];

function atualizarSaldo() {
    document.getElementById('saldo').textContent = `R$ ${saldo.toFixed(2)}`;
    localStorage.setItem('saldo', saldo);
}

function atualizarHistorico(transacao) {
    const historico = document.getElementById('extrato');
    const itemHistorico = document.createElement('li');
    itemHistorico.textContent = transacao;
    historico.appendChild(itemHistorico);
    transacoes.push(transacao);
    localStorage.setItem('transacao', JSON.stringify(transacoes));
}


function sacar() {
    const valor = parseFloat(prompt('Digite o valor a sacar:'));
    if (!isNaN(valor) && valor > 0 && valor <= saldo) {
        saldo -= valor;
        atualizarSaldo();
        atualizarHistorico(`Saque de R$ ${valor.toFixed(2)}`);
    } else {
        alert('Valor inválido ou saldo insuficiente para saque.');
    }
}

function esconderSaldo() {
    const saldo = document.getElementById('saldo');
    saldo.classList.toggle('hidden');
    if (saldo.classList.contains('hidden')) {
        const saldoText = saldo.innerText;
        const bolinhas = '•'.repeat(saldoText.length);
        saldo.innerText = bolinhas;
    } else {
        atualizarSaldo();
        atualizarHistorico(`Saque de R$ ${valor.toFixed(2)}`); // Saldo original
    }
}

atualizarSaldo();
transacoes.forEach(transacao => atualizarHistorico(transacao));


// Função para atualizar o saldo na página
function atualizarSaldo() {
    document.getElementById('saldo').textContent = saldo.toFixed(2);
}

// Função de saque
function confirmarSaque() {
    const valor = parseFloat(document.getElementById('valorSacar').value);
    if (!isNaN(valor) && valor > 0) {
        if (valor <= saldo) {
            saldo -= valor;
            atualizarSaldo();
            atualizarHistorico(`Saque de R$ ${valor.toFixed(2)}`);
            fecharSacarModal();
        } else {
            alert('Saldo insuficiente para saque.');
        }
    } else {
        alert('Por favor, insira um valor válido para saque.');
    }
}

// Função de depósito
function confirmarDeposito() {
    const valor = parseFloat(document.getElementById('valorDeposito').value);
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        atualizarSaldo();
        atualizarHistorico(`Depósito de R$ ${valor.toFixed(2)}`);
        fecharDepositarModal();
    } else {
        alert('Por favor, insira um valor válido para depósito.');
    }
}

// Funções para abrir e fechar o modal de Depositar
function abrirDepositarModal() {
    document.getElementById('modalDepositar').style.display = "block";
}

function fecharDepositarModal() {
    document.getElementById('modalDepositar').style.display = "none";
}

// Funções para abrir e fechar o modal de Extrato
function abrirExtratoModal() {
    document.getElementById('modalExtrato').style.display = "block";
}

function fecharExtratoModal() {
    document.getElementById('modalExtrato').style.display = "none";
}

 // Funções para abrir e fechar o modal de Saque
 function abrirSacarModal() {
    document.getElementById('modalSacar').style.display = "block";
}

function fecharSacarModal() {
    document.getElementById('modalSacar').style.display = "none";
}
// Função para fechar os modais ao clicar fora deles
window.onclick = function (event) {
    if (event.target == document.getElementById('modalDepositar')) {
        fecharDepositarModal();
    }
    if (event.target == document.getElementById('modalExtrato')) {
        fecharExtratoModal();
    }
}