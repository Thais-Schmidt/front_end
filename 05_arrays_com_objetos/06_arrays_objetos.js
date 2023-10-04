console.log(`------- Date -------`);

const hoje = new Date();
console.log(hoje);

console.log(`------- Date - Formato com localidade -------`);

console.log(hoje.toLocaleDateString(), hoje.toLocaleDateString());

console.log(hoje.toLocaleDateString('pt-br'));

console.log(`------- Date - Formato com localidade -------`);

// const aniversario = new Data("December 17, 1995 03:24:00");
// const aniversario2 = new Data("1995-12-17T03:24:00");
// const aniversario3 = new Date(1995, 11, 17);

// console.log(aniversario);
// console.log(aniversario2);
// console.log(aniversario3);