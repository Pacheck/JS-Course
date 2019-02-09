let botao = document.getElementById('botao');

let form = document.querySelector('.form');

let campoLogin = document.querySelector('#campo-login')

let campoPassword = document.querySelector('#campo-password');

let mensagemErro = document.querySelector('#mensagem-erro')






var contasCriadas = new Array();

let id = 0;

id = new Object()

id.login = 'Pedro';
id.senha = 123;

contasCriadas.push(id)

id++;

id = new Object()

id.login = 'Pacheco';
id.senha = 1234;

contasCriadas.push(id)

//console.log(contasCriadas[0].login);



botao.addEventListener('click', function(){

    chamaFunc(campoLogin, campoPassword, mensagemErro)

    // Chama as funções de callback
})

function chamaFunc(campoLogin, campoPassword, mensagemErro){


    if(campoLogin.value == ''
    && campoPassword.value == ''){

        mensagemErro.innerText = 'Por favor, digite seu Login e Senha';
        campoLogin.focus();

    }else if(campoLogin.value == ''){

        mensagemErro.innerText = 'Por favor, digite seu Login';
        campoLogin.focus();

    }else if(campoPassword.value == ''){

        mensagemErro.innerText = 'Por favor, digite sua Senha';
        campoPassword.focus();

    }else{

        verifica(campoLogin, campoPassword, contasCriadas);
        //../js/login.js
    }

}

////////////////////////////////////////////////////////






/*
function verifica(campoLogin, campoPassword){

    if(campoLogin.value == loginPacheck && 
     campoPassword.value == passwordPacheck){

        window.location = 'logado.html';
        
    }else if(campoLogin.value != loginPacheck
        && campoPassword.value == passwordPacheck){

        mensagemErro.innerText = 'O Login não é válido';
        campoLogin.value = '';
        campoPassword.value = '';
        campoLogin.focus();

    }else if(campoPassword.value != passwordPacheck
        && campoLogin.value == loginPacheck){

        mensagemErro.innerText = 'A senha não é válida';

        campoPassword.value = '';
        campoPassword.focus();

    }else{
        
        mensagemErro.innerText = 'O login e senha não são válidos!';

        campoLogin.value = '';
        campoPassword.value = '';
        campoLogin.focus();

    }


}
*/