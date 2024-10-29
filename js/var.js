//teste de variaveis

//atribuindo valores
let idade = 25
console.log(idade);

//modificando valores
idade = 32
console.log(idade);

//recuperando valores
idade = idade + 1
console.log(idade);

//var ou let

function exemploVAR(){
    var x = 5
    if(true){
        var x = 10
        console.log(x)
    
    }
    console.log(x)
}


function exemploLET(){
    let x = 5
    if(true){
        let x = 10
        console.log(x)
    
    }
    console.log(x)
}

function exemploCONST(){
    const x = 5
    if(true){
        const x = 10
        console.log(x)
    
    }
    console.log(x)
}

function tiposvariaveis(){

}

exemploLET()
exemploVAR()
exemploCONST()

// numeros
let idade1 = 25
let peso = 80.00
console.log(idade1, peso)

//texto
let nome = 'Francisco'
//ou
let nome_ = "João"
console.log(nome, nome_)

//boolean
let verdadeiro = true
let falso = false
console.log(verdadeiro, falso)

//Array
let lista = ['laranja','maçã','banana']
let precos = [1.99,2.99,7.99]
let mista= ['gol',5,1.99, true, false]
console.log(lista)
console.log(precos)
console.log(mista)

//nulo
let nulo = null;
console.log(nulo)

//desconhecido
let desc
console.log(desc)

let objeto = {}
console.log (objeto)

let aluno = {
    nome : 'higor',
    idade: 25,
    situação: true,
    endereco:{
        rua: 'r do sonho',
        bairro: 'jardim dois',
        cidade: 'ferraz de vasconcelos',
        uf: 'sp'},
        telefone : [11954345886, 11909080706]

}
//onjeto anonimos nao possui metodos de acesso ou de serviço
//apenas existem no momento da execução
// podemos ter objetos por dentro de objetos ( onjeto aninhado)

console.log(aluno)
//acessando atributos do objeto anonimo
//acesso direto nome_objeto.nome_atributo

console.log(aluno.nome)
//modificar o valor do objeto anonimo
//acesso direto: nome_objeto.nome_atributo = novoValor

aluno.nome = "davi"
console.log(aluno.nome)
