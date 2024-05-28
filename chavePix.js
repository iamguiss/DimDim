function gerarChavePix() {
    document.getElementById("gerarChavePix").disabled = true;
    let codigo = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 15; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("gerarChavePix").classList.add("hidden");
    document.getElementById("chavePixGerada").innerText = `Chave Pix Gerada: ${codigo}`; 
}
