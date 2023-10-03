// Escreva uma função que receba duas variáveis numéricas por parâmetro e compare-os, mostrando com RETURN na tela uma das mensagens abaixo:
// - O primeiro valor é o maior
// - O segundo valor é o maior
// - Não existe valor maior, os dois são iguais

const comparando = (numA, numB) => {

    if(numA > numB){
        return console.log(`O valor ${numA} e maior que o valor ${numB}`);
    }else if(numA < numB){
        return console.log(`O valor ${numB} e maior que o valor ${numA}`);
    }else {
        return console.log(`Não existe valor maior, os dois são iguais`);
    }

}

const resp = comparando(5 ,5);
console.log(resp);