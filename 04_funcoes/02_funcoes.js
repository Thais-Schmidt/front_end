console.log('------Funcao com retorno------');

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2){
    return (n1 + n2);
}

const resultado = soma(a,b);

console.log(resultado);

console.log('------ Escopo de funcao ------');

let y = 10;

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da funçao e ${y}`);
}

testandoEscopo();
console.log(`Y fora da funçao e ${y}`);

// let x = 10;

// if(true){
//     let x = 20;
//     console.log(x);
// }

// console.log(x);

console.log('------ Escopo Aninhado ------');

let m = 10;

function escopoAninhado(){
    let m = 20;

    if(true){

        let m = 30;

        if(true){
            let m = 40;
            console.log(m);
        }

        console.log(m);
    }

    console.log(m);
}

escopoAninhado()
console.log(m);

