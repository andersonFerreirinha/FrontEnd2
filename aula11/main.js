let botaoCadastrarReferencia = document.querySelector('#botaoCadastrar')
let controladoresReferencia = document.querySelectorAll('.controlador')



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

botaoCadastrarReferencia.addEventListener('click', function (event) {

    event.preventDefault()
    console.log(event)


})