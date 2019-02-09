//let id = 1;

function verificaConta(){



}


function verifica(campoLogin, campoPassword, contasCriadas){

    for(let i = 0; i < contasCriadas.length; i++){

        if(campoLogin.value == contasCriadas[i].login
            && campoPassword.value == contasCriadas[i].senha){

                console.log("Deu certo porra.")

            }


    }

}

// fazer o register