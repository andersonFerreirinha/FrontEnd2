var jogadas = 3;
var pontosUsuario = 0;
var pontosBot = 0;

for (let i = 0; i < jogadas && pontosUsuario < 2 && pontosBot < 2; i++) {
    let escolhaUsuario = parseInt(prompt('1 = pedra, 2 = papel, 3 = tesoura'))
    let escolhaBot = parseInt(Math.random() * 3 + 1)
    switch (escolhaUsuario) {
        case 1:
            console.log('pedra')
            switch (escolhaBot) {
                case 1:
                    console.log('pedra')
                    break;
                case 2:
                    console.log('papel')
                    pontosBot = pontosBot + 1;
                    break
                case 3:
                    console.log('tesoura')
                    pontosUsuario = pontosUsuario + 1
                    break;
            }
            break
        case 2:
            console.log('papel')
            switch (escolhaBot) {
                case 1:
                    console.log('pedra')
                    pontosUsuario = pontosUsuario + 1
                    break;
                case 2:
                    console.log('papel')
                    break;
                case 3:
                    console.log('tesoura')
                    pontosBot = pontosBot + 1;
            }
            break
        case 3:
            console.log('tesoura')
            switch (escolhaBot) {
                case 1:
                    console.log('pedra')
                    pontosUsuario = pontosUsuario + 1
                    break;
                case 2:
                    console.log('papel')
                    pontosBot = pontosBot + 1;
                    break;
                case 3:
                    console.log('tesoura')
                    break;
            }
            break
    }
    console.log('usurario ' + pontosUsuario + 'x' + pontosBot + ' bot');
}

if(pontosBot === pontosUsuario){
    console.log('Empatou')
}
if(pontosBot > pontosUsuario){
    console.log('Bot Ganhou')
    console.log(' Fim de Jogo')
}
if(pontosBot < pontosUsuario){
    console.log('Usuário Ganhou')
    console.log('Fim de Jogo')
}





