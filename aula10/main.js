let nomeReferencia = document.querySelector('#inputNome')
let sobrenomeReferencia = document.querySelector("#inputSobrenome")
let botaoReferencia = document.querySelector('#botaoEnviar')
let conteudoReferencia = document.querySelector('#conteudo')



window.onload = function(){
    botaoReferencia.addEventListener('click', function(event){
    event.preventDefault();
    let textoInputNome = nomeReferencia.value;
    let textoInputSobrenome = sobrenomeReferencia.value 
    let substituirLetra = textoInputNome.replace(/a/g,"@")

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
    <p>${textoInputNome.concat(" ", textoInputSobrenome)}</p>

    <h3>Função replace</h3>

    <p>${substituirLetra}</p>
    
    
    </div>
    </div>
    `
    


})

}
