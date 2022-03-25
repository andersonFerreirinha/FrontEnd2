let nomeReferencia = document.querySelector('#inputNome')
let sobrenomeReferencia = document.querySelector("#inputSobrenome")
let botaoReferencia = document.querySelector('#botaoEnviar')
let conteudoReferencia = document.querySelector('#conteudo')

window.onload = function(){
    botaoReferencia.addEventListener('click', function(event){
    event.preventDefault();
    let textoInputNome = nomeReferencia.value;
    let textoInputSobrenome = sobrenomeReferencia.value
    conteudoReferencia.innerHTML = `
    <div class="container">
    <div class="row">
    <div class="col">
    <h3>Função toUpperCase</h3>
    <p>${textoInputNome.toUpperCase()}<p>
    <h3>Função toLowerCase</h3>
    <p>${textoInputNome.toLowerCase()}</p>
    <h3>Função trim</h3>
    <p>${textoInputNome.trim()}</p>
    <h3>Função Concat</h3>
    <p>${textoInputNome.concat(" ", textoInputSobrenome)}
    </div>
    </div>
    `
    


})

}

// window.onload = function() {

//     // Adicionando um novo evento para o botão de soma
//     btSomarReference.addEventListener('click', function(event) {
//         event.preventDefault()
//         resultadoReference.innerHTML = somar(numero1Reference.value, numero2Reference.value)
//     })

//     btSubtrairReference.addEventListener('click', function(event) {
//         event.preventDefault()
//         resultadoReference.innerHTML = subtrair(numero1Reference.value, numero2Reference.value)
//     })

//     btMultiplicarReference.addEventListener('click', function(event) {
//         event.preventDefault()
//         resultadoReference.innerHTML = multiplicar(numero1Reference.value, numero2Reference.value)
//     })

//     btDividirReference.addEventListener('click', function(event) {
//         event.preventDefault()
//         resultadoReference.innerHTML = dividir(numero1Reference.value, numero2Reference.value)
//     })
// }




