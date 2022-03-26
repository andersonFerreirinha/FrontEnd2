let botaoCadastrarReferencia = document.querySelector('#botaoCadastrar')
let controladoresReferencia = document.querySelectorAll('.controlador')
let inputNomeReferencia = document.querySelector('#inputNome')
let inputSobrenomeReferencia = document.querySelector('#inputSobrenome')
let inputComentarioReferencia = document.querySelector('#inputComentario')
let nomeUsuarioReferencia = document.querySelector('b')
let comentarioReferencia = document.querySelector('p')
let InformacoesUsuario = JSON.parse(localStorage.getItem('InformacoesUsuario'))
// let ComentariosUser = JSON.parse(localStorage.getItem('Comentarios'))
 

for(let controladorReferencia of controladoresReferencia){

    let inputReferencia = controladorReferencia.children[1]

    
    inputReferencia.addEventListener('keyup', function () {

    if (inputReferencia.checkValidity()) {

        controladorReferencia.classList.remove('erro')
        botaoCadastrarReferencia.disabled = false
     }else{
        controladorReferencia.classList.add('erro')
        botaoCadastrarReferencia.disabled = true
     }

 })
}


// let comentarios = []
botaoCadastrarReferencia.addEventListener('click', function (event) {

    let usuario = {
        nome: inputNomeReferencia.value,
        sobrenome: inputSobrenomeReferencia.value,
        postagem: inputComentarioReferencia.value
    }

    // comentarios.push(usuario)

    event.preventDefault()
    console.log(event)
    localStorage.setItem('InformacoesUsuario', JSON.stringify(usuario)) 
    localStorage.setItem('Comentarios',JSON.stringify(comentarios))
    nomeUsuarioReferencia.innerHTML = InformacoesUsuario.nome
         for(let comentarioUser of comentarios){
         comentarioReferencia.innerHTML = `
         <div>${comentarioUser.postagem}</div>
       `

     }
})

