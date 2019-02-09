
function verificaConta(){

    // preciso terminar
}


function verifica(campoLogin, campoPassword, contasCriadas){

    for(let i = 0; i < contasCriadas.length; i++){

        if(campoLogin.value == contasCriadas[i].login
            && campoPassword.value == contasCriadas[i].senha){

                console.log("Deu certo ")

        }

    }

}

// fazer o register