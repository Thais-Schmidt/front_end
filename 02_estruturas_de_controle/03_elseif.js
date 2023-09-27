console.log('-----------------01--------------------');
// Exemplo de ELSE IF

/* Nestes esxemplos vamos aprender a utilização do -else if-, caso a condição do -if- não
atenda e retorne false, vamos para a opção -else if- onde teremos outra condição para 
avaliar, e caso essa  condição também retorne falso vamos para o próximo -else if-, e assim 
sucessivamente até que encontremos uma condição true ou o fim da estrutura. Abaixo alguns 
exemplos para testarmos: */

if (1 > 2) {
    console.log('Teste');
} else if (2 > 3) {
    console.log('Teste 2');
} else if (5 > 1) {
    console.log('Agora sim');
}

console.log('-----------------02--------------------');

var userName = 'Izaias';
var userAge = 40;

if (userName == 'José') {
    console.log('Bem vindo José!');
} else if (userName === 'Izaias' && userAge === 40) {
    console.log('Bem vindo Izaias, você tem 40 anos!!');
} else {
    console.log('Nenhuma condição aceita');
}