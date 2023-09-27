console.log('-----------------01----------------');
/* A estrutura switch permite executar um bloco de código 
diferente de acordo com cada opção (cada case) especificada. Seu uso é 
indicado quando os valores a serem analisados nessas condições são pré-definidos. 
A estrura de um switch pode conter várias instruçoes do tipo case em seu escopo.
Declaramos uma vaviável e utilizamos como parâmetro do 
switch para avaliarmos as condições: */

// Neste exemplo temos uma variável do tipo string que será avaliada no switch
const sexo = 'masculino';

// A variável sexo entre parênteses determina que é ela que será avaliada no escopo do switch
switch (sexo) {
    // o case abaixo está avaliando se a string "feminino" é o conteúdo da varíável sexo
    case "feminino":
        console.log('Bem-vinda!');
        break;
    default:
        console.log('Bem-vindo!');
}

console.log('-----------------02----------------');

// Neste exemplo temos uma variável do tipo boolean (true/false) que será avaliada no switch
const autenticado = true;

switch (autenticado) {
    case true:
        console.log('Usuário autenticado com sucesso!');
        break;
    default:
        console.log('Usuário não autenticado!');
}

console.log('-----------------03----------------');

// Imprime o dia da sema de acordo com o dia digitado
dia = 8;
switch (dia) {
    case 1:
        console.log('Hoje é domingo!');
        break;
    case 2:
        console.log('Hoje é segunda-feira!');
        break;
    case 3:
        console.log('Hoje é terça-feira!');
        break;
    case 4:
        console.log('Hoje é quarta-feira!');
        break;
    case 5:
        console.log('Hoje é quinta-feira!');
        break;
    case 6:
        console.log('Hoje é sexta-feira!');
        break;
    case 7:
        console.log('Hoje é sábado!');
        break;
    default:
        console.log('Dia inválido!');
}

