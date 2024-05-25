function confirmacaoSenha(){
    let novaSenha = document.getElementById("NSENHA1").value == "111";
    let confirmacaoSenha = document.getElementById("NSENHA2").value == "111";

    if (novaSenha && confirmacaoSenha){
        alert("Senha trocada com sucesso!!!!")
        window.location.href = "pglogin.html";
    }
}

function limparCampos(){
    novaSenha = document.getElementById("NSENHA1").value= "";
    ConfirmSenha = document.getElementById("NSENHA2").value= "";
}