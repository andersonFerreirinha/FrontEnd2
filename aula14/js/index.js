let cardRef = document.querySelector('.card')

// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
      
        //manipulamos a resposta
        //  cardRef.innerHTML += data.results[0].name.first
        // cardRef.innerHTML += data.results[0].name.last
        // cardRef.innerHTML += `<img src="${data.results[0].picture.large}">`
        renderizarDadosUsuario(data)
        console.log(data)
    });

function renderizarDadosUsuario(dados) {
    
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    //  cardRef.innerHTML += data.results[0].name.first
        // cardRef.innerHTML += data.results[0].name.last
    cardRef.innerHTML += `  <h1>${dados.results[0].name.first}</h1>
    <h1>${dados.results[0].name.last}</h1>
    <img src="${dados.results[0].picture.large}">
    <p>${dados.results[0].email}</p>`
   
        

    
    

    
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.