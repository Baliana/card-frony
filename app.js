'use strict'

const disciplinas = [
    {nome:'PPDM', icon: 'fisica-1.png', cor:'green'},
    {nome:'PRO', icon: 'fisica-2.png', cor: 'blue'},
    {nome:'PWBE', icon: 'android.png', cor: 'red'},
    {nome:'PWFE', icon: 'smartphone.png', cor: 'pink'}
]

function criarMenu(disciplina) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = ` --cor-hover: ${disciplina.cor}`

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)