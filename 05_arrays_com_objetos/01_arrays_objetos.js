console.log('-----------Arrays----------');
/**  ARRAYS
 * Arrays são listas;
 * Podemos inserir valores de qualquer tipos de dados, os valores são inseridos entre colchetes [] 
 * Cada valor é separado por uma vírgula 
*/

// Lista com itens numéricos
const lista = [1, 2, 3, 4, 5];

console.log(lista);
// Verificando com typeof o typo de dados que retorno 
console.log(typeof lista);

// Lista com itens diversos
const itens = ['Izaias', true, 1, 2, 3.14, []];

console.log(itens);
console.log('-----------Acessando um elemento----------');
/* ACESSANDO ELEMENTO DOS ARRAYS
Os arrays iniciam no índice 0 */
const arr = ['a', 'b', 'c', 'd'];

console.log(arr[0]);
console.log(arr[2]);

console.log('-----------Propriedades----------');
/* PROPRIEDADES DOS ARRAYS
 * Propriedades são como informações de um objeto.
 * Os arrays tem propriedades, assim como outros tipos de dados, essas propriedades podem ser
 * acessadas por notação de pontos ou colchetes: dado.prop ou dado['prop'] 
*/

const numbers = [1, 2, 3];

// Retorna a quantidade de elementos
console.log(numbers.length);
console.log(numbers['length']);

console.log('-----------Métodos----------');
/* MÉTODOS DOS ARRAYS
 * Métodos são como funções, acessamos com notaçãp de ponto e utilizamos () para invocar;
 * Um importante conceito da POO: Objetos são compostos por métodos e propriedades.
 * Como muitos dados são objetos em JS, temos métodos e propriedades neles 
*/

const otherNumbers = [4, 5, 6];

// Realiza a concatenação do array numbers com o otherNumbers
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

