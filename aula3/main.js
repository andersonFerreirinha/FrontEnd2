import somar from './somar.js'
import dividir from './dividr.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'

for(let operacao; operacao != '=';){
let primeiroNumero = converterNumero(prompt('Insira o primeiro numero'))
operacao = prompt('insira a operacao')
let segundoNumero = converterNumero(prompt('Insira o segundo numero'))

function converterNumero(numero) {

    return parseInt(numero)

}

switch (operacao) {
    case '+':
        console.log(somar(primeiroNumero, segundoNumero))
        break
    case '-':
        console.log(subtrair(primeiroNumero, segundoNumero))
        break
    case '*':
        console.log(multiplicar(primeiroNumero, segundoNumero))
        break
    case '/':
        console.log(dividir(primeiroNumero, segundoNumero))
        break
}
}