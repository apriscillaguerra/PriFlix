var filmes = []

function adicionar() {
    debugger
    var imagem = document.querySelector('#endereco').value
    var titulo = document.querySelector('#titulo-filme').value
    var filme = [imagem, titulo]

    if (filmes.findIndex((filme) => filme[0] == titulo) < 0) {
        filmes.push(filme)
        listar(filme)
    } else if (!imagem.endsWith('.jpg' || '.jpeg' || '.png') || titulo == '') {
        alert('Dados incompletos! Titulo pendente ou URL diferente de JPG, JPEG ou PNG.')
    }
    document.querySelector('#endereco').value = ''
    document.querySelector('#titulo-filme').value = ''

    console.log(filme.imagem)
}

function listar() {
    var catalogo = document.querySelector('.imagem-filme')
    catalogo.innerHTML += '<img src=' + filmes[filmes.length - 1][1] + '><p>' + filmes[filmes.length - 1][0] + '</p>'


}

function remover() {
    var catalogo = document.querySelector('.imagem-filme')

    for (var i = filmes.length - 1; i >= 0; i--) {
        filmes.pop()
    }
    catalogo.innerHTML = ''
}