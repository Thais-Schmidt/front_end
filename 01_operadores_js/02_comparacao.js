console.log('-----------1-----------');

//OPERADOR DE IGUALDADE (==)

//O operador de igualdade compara dois operadores e retorna o verdadeiro, se eles forem iguais

var x = 5;

console.log( x == 5); //retorna verdadeiro
console.log( x == '5'); //retorna verdadeiro
console.log( x == 4); //retorna falso
console.log( x == 'c'); //retorna falso

console.log('-----------2-----------');

//OPERADOR DE IGUALDADE ESTRITA (===)

//A igualdade estrita alem de comparar os valores dos operandos, leva em conta tambem o seu tipo.

console.log( x === 5); //retorna verdadeiro
console.log( x === '5'); //retorna falso

console.log('-----------3-----------');

//DIFERENTE (!=)

console.log('string1' != 'string2');

console.log('-----------4-----------');

//MAIOR (>=)

console.log(5 > 4)

console.log('-----------5-----------');

//MENOR (<=)

console.log(8 < 4)

console.log('-----------6-----------');

//MAIOR IGUAL (>=)

//Funciona de forma semelhante ao operador maior, mas retorna verdadeiro caso o operador da esquerda seja maior ou igual ao operador da direita.

var x = 6;
var y = 4;

console.log(x >= y); //true 
console.log(x >= 6); //true
console.log(y >= x); //false

console.log('-----------7-----------');

//MENOR IGUAL (<=)

//Partindo das declaraçoes das variaveis acima, vamos analisar o codigo 

var x = 6;
var y = 4;

console.log(x <= y); //false
console.log(x <= 6); //true
console.log(y <= x); //true


