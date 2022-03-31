//https://i.pinimg.com/originals/02/ea/19/02ea196f76a2fd03bee49ce7d61b344d.jpg

var filmes = []
var filme = {}

function construirLista(titulo, imagem) {
    return (filme = {
        titulo: titulo,
        imagem: imagem
    })
}

function adicionar() {
    debugger
    var imagem = document.querySelector('#endereco').value
    var titulo = document.querySelector('#titulo-filme').value

    if (!imagem.endsWith('.jpg' || '.jpeg' || '.png') || titulo == '') {
        alert('Dados incompletos! Titulo pendente ou URL diferente de JPG, JPEG ou PNG.')
        return
    }

    filmes.push(construirLista(titulo, imagem))


    document.querySelector('#endereco').value = ''
    document.querySelector('#titulo-filme').value = ''

    listar()
}

function listar() {
    var catalogoFilme = document.querySelector('.filme')
    var listaFilmes = []

    for (var i in filmes) {
        listaFilmes.push('<div class="imagem-filme"><img class="banner-filme" src="' + filmes[i].imagem + '"><p class="nome-filme">' + filmes[i].titulo + '</p></div>')
    }
    catalogoFilme.innerHTML = listaFilmes
}

function remover() {
    var catalogo = document.querySelector('.filme')

    for (var i = filmes.length - 1; i >= 0; i--) {
        filmes.pop()
    }
    catalogo.innerHTML = ''
}