// Criar um programa que exiba uma mensagem informando qual é a estação do ano de a acordo com o mês digitado.
// Ex.: Caso o usuário digite setembro, informar que é Inverno. Utilizar a lógica para incluir o mês na estação que ele tem mais dias.

const estacao = "Outubro"

switch (estacao) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
        console.log('O mes de ' + estacao + ' pertence a estação: Verão');
        break;
    case 'Abriu':
    case 'Maio':
    case 'Junho':
        console.log('O mes de ' + estacao + ' pertence a estação: Outono');
        break;
    case 'Junho':
    case 'Agosto':
    case 'Setembro':
        console.log('O mes de ' + estacao + ' pertence a estação: Inverno');
        break;
    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
        console.log('O mes de ' + estacao + ' pertence a estação: Primavera');
        break;
    default:
        console.log('Erro de digitação! Tente novamente.');
}