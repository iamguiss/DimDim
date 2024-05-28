
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

    function depositar() {
        const valor = parseFloat(prompt('Digite o valor a depositar:'));
        if (!isNaN(valor) && valor > 0) {
            saldo += valor;
            atualizarSaldo();
            atualizarHistorico(`Depósito de R$ ${valor.toFixed(2)}`);
    }   else {
            alert('Por favor, insira um valor válido para depósito.');
        }
    }

    function sacar() {
        const valor = parseFloat(prompt('Digite o valor a sacar:'));
        if (!isNaN(valor) && valor > 0 && valor <= saldo) {
            saldo -= valor;
            atualizarSaldo();
            atualizarHistorico(`Saque de R$ ${valor.toFixed(2)}`);
    }   else {
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
