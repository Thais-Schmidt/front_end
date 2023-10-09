console.log(`------- Date -------`);

const hoje = new Date();
console.log(hoje);

console.log(`------- Date - Formato com localidade -------`);

console.log(hoje.toLocaleDateString(), hoje.toLocaleDateString());

console.log(hoje.toLocaleDateString('pt-br'));

