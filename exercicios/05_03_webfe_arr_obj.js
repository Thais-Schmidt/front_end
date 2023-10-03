// Desenvolva uma função que receba por parâmetro as variáveis: nome do funcionário, salário e quantos anos ele trabalha na empresa.

// Exibir uma mensagem amigável mostrando o nome do funcionário com seu novo salário, utilizando o RETURN mostre seu novo salário, reajustado de acordo com a tabela a seguir

// - Até 3 anos de empresa: aumento de 3%
// - Entre 3 e 10 anos: aumento de 12.5%
// - 10 anos ou mais: aumento de 20%


const aumentoSal = (a,b,c) => {

    let salario = a;
    let nomeFuncionario = b;
    let anosTrabalhados = c;

    if (c <= 3){
        
        var porcentagem = a * 0.03;
        var aumento = a + porcentagem;
        
        return console.log(`O funcionario ${b} tera um reajuste de aumento salarial de 3%, ficando assim, um salario de ${aumento} `);

    } else if(c >= 3 || a <=10) {

        var porcentagem = a * 0.125;
        var aumento = a + porcentagem;

        return console.log(`O funcionario ${b} tera um reajuste de aumento salarial de 12.5%, ficando assim, um salrio de ${aumento} `);

    } else if(c > 10) {

        var porcentagem = a * 0.2;
        var aumento = a + porcentagem;

        return console.log(`O funcionario ${b} tera um reajuste de aumento salarial de 20%, ficando assim, um salrio de ${aumento} `);
    }
        
}

const funcionarioExp = [
    {nomeFuncionario: `Joaquin Silva`, salario: `1500`, anosTrab: 3},
    {nomeFuncionario: `Eduardo Machado`, salario: `2000`, anosTrab: 5},
    {nomeFuncionario: `Monica Suzano`, salario: `3500`, anosTrab: 11},
]

const funcA = funcionarioExp.nomeFuncionario;
