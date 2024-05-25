function gerarChavePix() {
    const tipoChave = document.getElementById('tipoChave').value;
    let chave = '';
    
    switch (tipoChave) {
        case 'aleatoria':
            chave = 'Aleatória: ' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            break;
        case 'cpf':
            chave = 'CPF: ' + '123.456.789-09';
            break;
        case 'cnpj':
            chave = 'CNPJ: ' + '12.345.678/0001-95';
            break;
        case 'email':
            chave = 'E-mail: ' + 'exemplo@dominio.com';
            break;
        case 'telefone':
            chave = 'Telefone: ' + '+55 (11) 91234-5678';
            break;
        default:
            chave = 'Tipo de chave desconhecido';
    }
    
    document.getElementById('chavePixValor').textContent = chave;
    document.getElementById('chavePixGerada').classList.remove('hidden');
}