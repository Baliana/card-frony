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

const produtos = [{
        nome: 'Iphone 16 Pro Max',
        icon: 'iphone.jpg',
        descricao: 'Apple iPhone 16 Pro Max (256 GB) Titânio-deserto',
        preco: 'R$ 10.999.00'
    },
    {
        nome: 'Samsung Galaxy S24 Ultra',
        icon: 'S24',
        descricao: 'Smartphone Samsung Galaxy S23 Ultra 512GB Verde 5G 12GB RAM 6,8” Câm. Quádrupla + Selfie 12MP',
        preco: 'R$ 6.499,00'
    },
    {
        nome: 'Xiaomi 14',
        icon: 'Xiaomi',
        descricao: 'Smartphone Xiaomi Redmi Note 14 256GB 8GB RAM Dual SIM Tela 6.67" - Preto',
        preco: 'R$ 1.557,59'
    },
    {
        nome: 'Nokia',
        icon: 'nokia',
        descricao: 'lanterna Original Nokia 1100 Gsm900',
        preco: '81,59'

    }

]

function criarBanner(Celulares) {
    const container = document.getElementById('container')
    container.className = 'container'

    const card = document.createElement('div')
    card.className = 'card' 

    const Titulo = document.createElement('div')
    Titulo.className = 'Titulo' 
    
    const Titulop = document.createElement('p')
   

    const image = document.createElement('div')
    image.className = 'image'

    const img = document.createElement('img')

     const comentario = document.createElement('div')
     comentario.className = 'comentario'

     const comentarioh1 = document.createElement('h1')

     const comentariop = document.createElement('p')

     const preco = document.createElement('p')

     const listaBotao = document.createElement('div')
     listaBotao.className = 'listaBotao'

     const Modelos = document.createElement('p')

     const compra = document.createElement('div')
     compra.className = 'compra'


}