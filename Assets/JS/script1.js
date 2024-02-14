var nome = document.getElementById("nome");
var email = document.querySelector(".email");
var nomeOk = false;
var emailOk = false;

function ValidarNome(){
    let txtNome = document.getElementById("txtNome");
    if(nome.value.length < 3){
     txtNome.innerHTML = "Nome Inválido"
     txtNome.style.color = "red"
     nomeOk = false;
     nome.innerText 
    }else{
        txtNome.innerText = "Nome Válido"
        txtNome.style.color = "blue"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
       emailOk = false;
       nome.innerText 
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'blue'
    }
 }

 function enviar(){
    if(nomeOk && emailOk){
        alert("Enviada com sucesso!")
        txtEmail.style.color = 'green'
    }else{
        alert ('Coloque as informações corretamente')
    }
 }


Texto();
