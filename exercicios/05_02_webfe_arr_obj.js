// Criar uma função utilizando for ou while que RETORNE um array com a seguinte contagem: 0 3 6 9 12 15 18.

const retornando = () => {

    const array = [];
    let i = 0;

    while(i <= 18){
        
        array.push(i)
        i += 3;
        
    }

    return array;

}

const retorno = retornando();
console.log(retorno)