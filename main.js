function maiorQueOutroNumero(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(maiorQueOutroNumero(6, 5));

function idadeEmdias(idade){
    let idadeEmDias = 0;
    for(let i= 1; i <= idade; i++){
        idadeEmDias += 365;
    }
    return idadeEmDias;
}

console.log(idadeEmdias(17));

function diaDoMes(numeroMes){
    switch(numeroMes){
        case 1:
            return 'Janeiro';
            break;
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5:
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
    }
}

console.log(diaDoMes(7))

function retornaOposto(valor) {
    try{
        switch(valor){
            case true:
                return false;
                break;
            case false:
                return true;
                break;
        }

        if(valor > 0 || valor < 0){
            valor = valor * -1;
        }
        return valor;

    } catch {
        console.log("Booelano ou Número esperados");
    }
}

console.log(retornaOposto(0));

function multiplicacaoHardcore(num1, num2){
    const valornum1 = num1;
    for(let i = 1; i < num2; i++){
        num1 = num1 + valornum1;
    }
    return num1;
}

console.log(multiplicacaoHardcore(2, 100))

function repeteElemento(elemento, quantia){
    let lista= [];
    for(let i = 0; i < quantia; i++){
            lista.push(elemento);
        }
    return lista;
}

console.log(repeteElemento('JS Domina!', 3));

function filtroNumeros(array){
    for(let i = 0; i < array.length; i++){
        if(!Number.isInteger(array[i])){
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

const lista = [true, "banana", 45, 12, "salada", false, 3, "salgadinho", 123]

console.log(filtroNumeros(lista));

function somaElementos(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(somaElementos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function retornaSegundoMaiorNumero(array){
    array = array.sort(function(a,b){
        return a - b;
    })

    let Segundomaior = 0;
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++) {
            if(array[i] > array[j]){
                Segundomaior = array[j];
            }
        }
    }
    return Segundomaior;
}

console.log(retornaSegundoMaiorNumero([1, 2, 3, 4, 5]));

function calculaMediaDeAlunos(listaAlunos){
    let media = 0;
    for(let i = 0; i < listaAlunos.length; i++){
        media = (listaAlunos[i].nota1 + listaAlunos[i].nota2 + listaAlunos[i].nota3 + listaAlunos[i].nota4) / 4;
        media = media.toFixed(2);
        return `{nome ${listaAlunos[i].nome}, media: ${media}`
    }
}

const alunos = [
    {
        nome: 'Arthur',
        nota1: 7.4,
        nota2: 5.5,
        nota3: 10,
        nota4: 8.4
    },
    {
        nome: 'Daniela',
        nota1: 6.4,
        nota2: 3.7,
        nota3: 7,
        nota4: 9.5
    },
    {
        nome: 'José',
        nota1: 9.0,
        nota2: 9.5,
        nota3: 10,
        nota4: 8.4
    }
];

console.log(calculaMediaDeAlunos(alunos));
