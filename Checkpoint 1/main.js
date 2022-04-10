let buttonEnviarReference = document.querySelector('#buttonEnviar')
let mainReference = document.querySelector('#conteudo')
let tituloReference = document.querySelector('#titulo')
let descricaoReference = document.querySelector('#descricao')
let imagemReference = document.querySelector('#imagem')


function mostrarMensagem(){
    alert('O postagem foi enviada')
}

let postagens = []

buttonEnviarReference.addEventListener('click', function(event){
    event.preventDefault();
    mostrarMensagem();
    
    
    let postagem = {
        titulo: tituloReference.value,
        descricao: descricaoReference.value,
        imagem: imagemReference.value
    }

    postagens.push(postagem)

    
    mainReference.innerHTML += `
    <div class="card">
            <img src="${postagem.imagem}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${postagem.titulo}</h5>
            <p class="card-text">${postagem.descricao}</p>
             Visualizar
            </button>
        </div>
    </div> 
    `           
})