let voltarBtn = document.querySelector('#voltar');

let nextImage = document.querySelector('#prox-image');

let prevImage = document.querySelector('#volta-image');

let image = document.getElementById('image');

let imagemAtual = 0;

voltarBtn.addEventListener('click', function(){

    window.location = 'index.html';

})

nextImage.addEventListener('click', function(){

    if(imagemAtual == 5){

        Object.freeze()

    }else{

        imagemAtual++;
        image.src = 'img/'+ imagemAtual + '.jpg';

    }
    
})

prevImage.addEventListener('click', function(){

    if(imagemAtual == 0){

        Object.freeze()

    }else{

        imagemAtual--;
        image.src = 'img/' + imagemAtual + '.jpg'

    }

})
