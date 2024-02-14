var nome = document.getElementById("nome");
var email = document.querySelector(".email");
var nomeOk = false;
var emailOk = false;

function ValidarNome(){
    let txtNome = document.getElementById("txtNome");
    if(nome.value.length < 3){
     txtNome.innerHTML = "Nome Inválido"
     txtNome.style.color = "white"
     nomeOk = false;
     nome.innerText 
    }else{
        txtNome.innerText = "Nome Válido"
        txtNome.style.color = "white"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'white'
       emailOk = false;
       nome.innerText 
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'white'
       emailOk = true
    }
 }

 function enviar(){
    if(nomeOk && emailOk){
        alert("Enviada com sucesso!")
    }else{
        alert ('Informe corretamente as infomações para enviar')
    }
 }

 
Texto();
