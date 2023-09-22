//Utilizados para realizar operaçoes logicas, podem ser dois tipos: AND, OR e NOT.

console.log('----------- 1 -----------');

//AND

console.log(true && true); //retorna true 

console.log(true && false); //retorna false

console.log('----------- 2 -----------');

//OR

//Para o operador OR ( || ) retornar verdadeiro, basta que um dos operandos seja verdadeiro.

//Ele tambem retorna verdadeiro caso os dois operandos sejam verdadeiros, retorna false se os dois forem falsos.

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log('----------- 2 -----------');

//NOT 

//O operador de negaçao (!) e um operador unario, isto e, opera apenas sobre um operando.
//Ele nega , inverte o valor logico do operando. 

var x = 2 > 1;

console.log(x);
console.log(!x);
