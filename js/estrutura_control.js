function estrutura_condicional_simples(){
    //condicional simples
    let idade = prompt ('digite a sua idade')
        if (idade>17){
        alert ('maior de idade')
    }
}

function estrutura_condicional_composta(){
    //condicional simples
    let idade = prompt ('digite a sua idade')
    if(idade>17){
        alert ('maior de idade')
    } else {
        alert('menor de idade')
    }


}

function estrutura_condicional_simples(){
    //condicional composta (se, senão se e senão)
    let idade = prompt ('digite a sua idade')
        if (idade>65){
        alert ('idoso')
    }else if (idade >=18 && idade <65) {
        alert('adulto')
    }else if (idade >=12 && idade <65){
        alert ('adolescente')
    }else {
        alert ('criança')
    }
}

function estrutura_de_caso(){
    let idade = prompt ('digite a sua idade')
    switch(idade){
        case idade>65:
            alert('idoso')
        case idade >=18 && idade <65:
            alert('adulto')
        case idade >=12 && idade <65:
            alert('adolescente')
        case idade <12:
            alert ('criança')
        break
    }
}

estrutura_condicional()
estrutura_condicional_composta()
estrutura_condicional_simples()
estrutura_de_caso()