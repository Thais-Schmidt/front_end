console.log(`------- Array : indexOf e lastIndexOf -------`);

const frutas = ['Morango',  'Maça', 'Abacate', 'Uva', 'Abacate'];

console.log(frutas.indexOf('Maça'));
console.log(frutas.indexOf('Abacate'));
console.log(frutas.lastIndexOf('Abacate'));

console.log(`------- Array : forEach -------`);

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(num  => console.log(num));

console.log(`------- Objeto : forEach -------`);

const posts = [
    {title: `Post#1`, category:`C#`},
    {title: `Post#2`, category:`Javascript`},
    {title: `Post#3`, category: `HTML`},
];

posts.forEach((posts) => {
    console.log(`Exibindo post ${posts.title} da categoria ${posts.category}`);
})

console.log(`------- Array: Includes -------`);

const vogais = ['a', 'e', 'i', 'o', 'u'];
if(vogais.includes('o')){
    console.log('Vogal');
}else{
    console.log('Consoante');
}

console.log(`------- Array: map -------`);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 1;
while(i<=10){

    const arrayN = array.map((x) => x * i);
    console.log(arrayN);
    i++

}

console.log(`------- Array: reverse -------`);

const arrayX = [10, 20, 30, 40];
const arrayY = arrayX.map((x) => x);

arrayY.reverse();

console.log(arrayX);
console.log(arrayY);






