console.log('-----------Objetos----------');
/* OBJETOS 
 * Em JS temos um tipo de dado que é o objeto, precisamos declarar um tipo e um nome para o objeto, 
 * o objeto fica em um bloco de chaves:
*/
const person = {
    name: 'Thata',
    age: 22,
    job: 'Entrando em desespero'
}

// mostra as informações de todo o objeto no terminal
console.log(person);

// mostra apenas a informação da propriedade selecionada
console.log(person.name); // nome
console.log(person.age); // idade
console.log(person.job); // profissão

// Acessando a pro´riedade length e verificando a quantidade de caracteres
console.log(person.name.length); // nome

// retorna o tipo do elemento em questão
console.log(typeof person);

console.log('-----------Objetos - Removendo e Criando novas Propriedades ----------');
/* REMOVENDO E CRIANDO NOVAS PROPRIEDADES
 * Para adicionar uma nova propriedade a um objeto, utilizamos a notação de ponto e atribuímos um valor.
 * Já para excluir, vamos utilizar o operador delete na propriedade alvo
*/
const car = {
    engine: 2.0,
    brand: 'VW',
    model: 'Tiguan',
    km: 20000
}

console.log(car);

// Adicionando uma nova propriedade, quandidade de portas
car.doors = 4;

// Exibindo para verificar se a alteração surtiu efeito
console.log(car);

// Para alterar o valor de uma propriedade basta inserir seu novo valor
car.model='Tiguan 2.0';

// Deletando a propriedade km
delete car.km;

// Exibindo para verificar se a alteração surtiu efeito
console.log(car);

// OBS.: Geralmente se utiliza a opção para adionar uma propriedade 