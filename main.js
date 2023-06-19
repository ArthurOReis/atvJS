function maiorQueOutroNumero(num1, num2){
    return(num1 > num2 ? true : false);
}

console.log(maiorQueOutroNumero(6, 5));

function idadeEmdias(idade){
    return idade * 365;
}

console.log(idadeEmdias(17));

function diaDoMes(numeroMes){
    try{
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    return meses[numeroMes - 1];
    } catch {
        return "Digite um valor válido";
    }
}

console.log(diaDoMes(7))

function retornaOposto(valor) {
    try{
        switch(valor){
            case true:
                return false;
            case false:
                return true;
        }

        if(valor > 0 || valor < 0){
            valor = valor * -1;
        }
        return valor;

    } catch {
        console.log("Booelano ou Número esperados");
    }
}

console.log(retornaOposto(15));

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

function melhoresAlunos(estudantes) {
    let melhorAluno = { nome: '', media: 0 };

    for (let aluno in estudantes) {
        let notas = estudantes[aluno];
        let soma = 0;

        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        let media = soma / notas.length;

        if (media > melhorAluno.media) {
            melhorAluno.nome = aluno;
            melhorAluno.media = media;
        }
    }

    return melhorAluno;
}

const estudantes = {
    Augusto: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
};

const melhorAluno = melhoresAlunos(estudantes);
console.log(melhorAluno);
