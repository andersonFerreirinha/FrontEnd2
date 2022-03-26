let botaoCadastrarReferencia = document.querySelector('#botaoCadastrar')
let controladoresReferencia = document.querySelectorAll('.controlador')
let inputNomeReferencia = document.querySelector('#inputNome')
let inputSobrenomeReferencia = document.querySelector('#inputSobrenome')
 

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

    let usuario = {
        nome: inputNomeReferencia.value,
        sobrenome: inputSobrenomeReferencia.value
    }

    event.preventDefault()
    console.log(event)
    localStorage.setItem('InformacoesUsuario', JSON.stringify(usuario))
    
    location.href = 'home.html'


})