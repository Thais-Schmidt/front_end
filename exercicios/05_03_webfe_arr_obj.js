// Desenvolva uma função que receba por parâmetro as variáveis: nome do funcionário, salário e quantos anos ele trabalha na empresa.

// Exibir uma mensagem amigável mostrando o nome do funcionário com seu novo salário, utilizando o RETURN mostre seu novo salário, reajustado de acordo com a tabela a seguir

// - Até 3 anos de empresa: aumento de 3%
// - Entre 3 e 10 anos: aumento de 12.5%
// - 10 anos ou mais: aumento de 20%

const nome = "Thais Schmidt";
const salario = 1900.00;
const anos = 11;

const aumentoSal = (nome, salario, anos) => {

    let aumentoSalario;

    if (anos <= 3){
        
        aumentoSalario = salario * 1.03;
        
        return `O funcionario ${nome} tera um reajuste de aumento salarial de 3%, ficando assim, um salario de ${aumentoSalario}.`;

    } else if(anos <=10) {

        aumentoSalario = salario * 1.125;

        return `O funcionario ${nome} tera um reajuste de aumento salarial de 12.5%, ficando assim, um salario de ${aumentoSalario}.`;

    } else {

        aumentoSalario = salario * 1.2;

        return `O funcionario ${nome} tera um reajuste de aumento salarial de 20%, ficando assim, um salario de ${aumentoSalario}.`;
    }
        
}

const func = aumentoSal(nome, salario, anos)
console.log(func)