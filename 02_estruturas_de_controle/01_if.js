console.log('-----------------01--------------------');
/*
O IF é muito utilizado na programação em geral; 
Temos um bloco de código sendo executado, se uma condição for verdadeira;
A condição é validada por um boolean gerado após a execução de código 
no if; 
Um bloco é determinado por abertura e fechamento de chaves
*/

const x = 10;

if (x > 7) {
    console.log('X é maior que 7');
}

console.log('-----------------02--------------------');

const user = 'Maria';

if (user === 'João') {
    console.log('Olá João!');
}

if (user === 'Maria') {
    console.log('Olá Maria!');
}

console.log(user === 'João', user === 'Maria');

console.log('-----------------03--------------------');

const num = 5;

if (num != 4) {
    console.log('Número diferente');
}