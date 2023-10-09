console.log(`\n______ Metodos de string - trim ______`);
// o trim remove tudo que nao e texto em uma string

const texto = ' \t testando \n'; //
console.log(texto);

console.log(texto.trim());

console.log(`\n______ Metodos de string - substring ______`);
//o substring e utilizado para retornar parte de uma string 

const palavra = `javascript`;

const resSubstring = palavra.substring(0, 5);
console.log(resSubstring);

//0 J 1 A 2 V 3 A 4 S 5 C 6 R 7 I 8 P 9 T 10 

console.log(`\n______ Metodos de string - padStart ______`);

numero = '10';
const testPadStart = numero.padStart(4,'0');
console.log(testPadStart);

console.log(`\n______ Metodos de string - padEnd ______`);

numero = '11';
const testPadEnd = numero.padEnd(4,'0');
console.log(testPadEnd);

console.log(`\n______ Metodos de string - split ______`);

const frase = `O rato roeu a roupa do rei de Roma`;
const array = frase.split(` `);
console.log(array);

console.log(`______ Metodos de string - join ______`);

const listaCompras = ['Mouse', 'Teclado', 'Monitor'];
const listaComprasString = `Precisamos comprar ${listaCompras.join(',')}.`;
console.log(listaComprasString);