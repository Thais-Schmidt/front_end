// Criar uma função com o nome superSomador(), que vai receber dois números como parâmetros e depois vai retornar a soma de todos os valores  no intervalo entre os valores recebidos, verificar também se o primeiro parâmetro é menor  que o segundo antes de realizar os cálculos.

function superSomador(valor1, valor2){

    if(valor1<=valor2){
        let soma = 0;
        while(valor1<=valor2){
            soma += valor1;
            valor1++;
        }
        return soma;
    }else{
        console.log(`O primeiro numero deve ser menor que o segundo numero.`);
    }
}

const valor1 = 1 ;
const valor2 = 5;
const result = superSomador(valor1, valor2);

console.log(`a soma dos valores entre ${valor1} e ${valor2} e igual a ${result}`);






