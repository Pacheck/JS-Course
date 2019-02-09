let botao = document.getElementById('botao');

let form = document.querySelector('.form');

let campoLogin = document.querySelector('#campo-login')

let campoPassword = document.querySelector('#campo-password');

let mensagemErro = document.querySelector('#mensagem-erro')

// Object (account-test-in-fake-database) section - at test

var contasCriadas = new Array();

let id = 0;

id = new Object()

id.login = 'Teste';
id.senha = 123;

contasCriadas.push(id)

id++;

//Click-event section

botao.addEventListener('click', function(){

    chamaFunc(campoLogin, campoPassword, mensagemErro)

    // Chama as funções de callback
})

//'callback' function, verify lg and passw
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
