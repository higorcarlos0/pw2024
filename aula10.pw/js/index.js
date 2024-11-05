//selecionamos os elementos do html
const titulo = document.getElementById('titulo') // selecionando elemento com id
const texto = document.querySelector('.texto') //selecionamos elementos
const botao = document.getElementById('botao')
console.log(titulo,texto,botao)


//selecionando elementos que não existe
const texto1 = document.querySelector('texto1')
const botao1 = document.getElementById('botao1')
console.log(texto1,botao1)

//inserindo um evento no botao
botao.addEventListener('click', ()=>{
    alert('sou um evento externo')
})

//manipulando conteudos e estilos

//alterar o conteudo textual
titulo.textContent = 'aula com DOM em js'

texto.innerHTML = "<strong>Texto adicionado pelo o js/strong>"

//alterando estilos

titulo.style.color = "blue"

texto.style.fontSize = "20px"

//manipulando elementos
//criando um elemento

const novoParagrafo = document.createElement('p')

novoParagrafo.textContent = "meu novo paragrafo"

//adiconando um novo elemento
document.body.appendChild(novoParagrafo)

const div = document.getElementsByClassName('textoinicio')
console.log(div)

document.div.appendChild(novoParagrafo)
//aletrando um elemento

//removendo um elemento