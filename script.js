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
    } else {
        filmes.push(construirLista(titulo, imagem))
    }

    document.querySelector('#endereco').value = ''
    document.querySelector('#titulo-filme').value = ''

    console.log(imagem)
    console.log(titulo)

    listar()
}

function listar() {
    var catalogoFilme = document.querySelector('.imagem-filme')

    for (var i in filmes) {
        catalogoFilme.innerHTML += '<img class="banner-filme" src="' + filmes[i].imagem + '"><p class="nome-filme">' + filmes[i].titulo + '</p>'
    }

}

function remover() {
    var catalogo = document.querySelector('.imagem-filme')

    for (var i = filmes.length - 1; i >= 0; i--) {
        filmes.pop()
    }
    catalogo.innerHTML = ''
}