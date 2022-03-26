let nomeUsuarioReferencia = document.querySelector('b')
let InformacoesUsuario = JSON.parse(localStorage.getItem('InformacoesUsuario'))


nomeUsuarioReferencia.innerHTML = InformacoesUsuario.nome + " " + InformacoesUsuario.sobrenome



