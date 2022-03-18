
import somar from './somar.js'
import subtrair from './subtrair.js'
import dividir from './dividir.js'
import multiplicar from './multiplicar.js'

// Obtenção das referencias dos elementos no HTML
let numero1Reference = document.querySelector('#numero1')
let numero2Reference = document.querySelector('#numero2')
let btSomarReference = document.querySelector('#somar')
let btSubtrairReference = document.querySelector('#subtrair')
let btMultiplicarReference = document.querySelector('#multiplicar')
let btDividirReference = document.querySelector('#dividir')
let resultadoReference = document.querySelector('#resultado')


window.onload = function() {

    // Adicionando um novo evento para o botão de soma
    btSomarReference.addEventListener('click', function(event) {
        event.preventDefault()
        resultadoReference.innerHTML = somar(numero1Reference.value, numero2Reference.value)
    })

    btSubtrairReference.addEventListener('click', function(event) {
        event.preventDefault()
        resultadoReference.innerHTML = subtrair(numero1Reference.value, numero2Reference.value)
    })

    btMultiplicarReference.addEventListener('click', function(event) {
        event.preventDefault()
        resultadoReference.innerHTML = multiplicar(numero1Reference.value, numero2Reference.value)
    })

    btDividirReference.addEventListener('click', function(event) {
        event.preventDefault()
        resultadoReference.innerHTML = dividir(numero1Reference.value, numero2Reference.value)
    })
}