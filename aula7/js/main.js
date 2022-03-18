let inputReference = document.querySelector('#valor')
let buttonEnviarReference = document.querySelector('#submit')
let mainReference = document.querySelector('#conteudo')

buttonEnviarReference.addEventListener('click', function(event){
    event.preventDefault()

    let texto = inputReference.value

    mainReference.innerHTML += `
    <p>${texto}</p>
    `

})