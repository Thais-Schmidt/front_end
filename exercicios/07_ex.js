// Desenvolva um script que receba 4 notas (let/const) de um aluno. Em seguida ele deve calcular a média do aluno e exibir no console uma das mensagens de acordo com o o resultado:

// "Aprovado", se a média alcançada for maior ou igual a sete;
// "Reprovado", se a média for menor do que sete;
// "Aprovado com Distinção", se a média for igual a dez.

let nota1 = 7;
let nota2 = 9;
let nota3 = 9;
let nota4 = 5;

var soma = nota1 + nota2 + nota3 + nota4;
var div = soma/4;

if(div === 10){
    console.log("A media do aluno e "+div+" e o aluno esta: Aprovado com Distinção.")
}else{
    if(div >= 7){
        console.log("A media do aluno e "+div+" e o aluno esta: Aprovado.")
    }
    else{
        console.log("A media do aluno e "+div+" e o aluno esta: Reprovado.")
    }
}

