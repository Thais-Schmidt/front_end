console.log(`------ Arrow Function ------`);

const testArrow = () => {
    console.log(`Essa e uma Arrow function`);
}

testArrow()

console.log(`------ Desafio ------`);

//crie uma arrow function para validar se um numero e par ou impar

const parImpar = (num) => {

    if(num%2 == 0){
        return `Este numero e PAR`;

    }if(num%2 == 1){
        return `Este numero e IMPAR`;
    
    }
    
}

const resp = parImpar(5);
console.log(resp);

console.log(`------ Mais sobre as Arrow Functions ------`);

const raizQuadrada = (x) => {
    return x * x;
} 

console.log(raizQuadrada(4));

(`-- Maneira simplificada --`)

const raizQuadrada2 = (y) => y * y; 

console.log(raizQuadrada2(5));

