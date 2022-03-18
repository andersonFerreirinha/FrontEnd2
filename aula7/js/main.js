let inputReference = document.querySelector('#valor')
let buttonEnviarReference = document.querySelector('#submit')
let mainReference = document.querySelector('#conteudo')


window.onload = function(){
    alert("Pagina carregada")
}

buttonEnviarReference.addEventListener('click', function(event){
    event.preventDefault()

    let texto = inputReference.value

    mainReference.innerHTML += `
    <p>${texto}</p>
    `

})