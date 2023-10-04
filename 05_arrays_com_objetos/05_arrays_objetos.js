console.log(`------- Converter array para objeto -------`);

const pessoa = [`Thata`, 22, `Sumare`];

//O metodo Object.assing() e utilizado para copiar as propriedades de um ou mais objetos de origem para objeto de destino:

const objPessoa = Object.assign({
    nome: pessoa[0],
    idade: pessoa[1],
    cidade: pessoa[2],

})

console.log(pessoa);
console.log(objPessoa);

console.log(`------- Converter objeto para array -------`);

const obj={
    livro: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    anos: 1937,
}

const array = Object.keys(obj).map(chave => obj[chave]);

console.log(obj);
console.log(array);