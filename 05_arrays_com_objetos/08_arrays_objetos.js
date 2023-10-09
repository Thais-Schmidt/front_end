console.log(`______ Rest Operator / Rest Parameters ______`);

// Rest Operator e caractyerizado pelo simbolo (...)

const somaInfinita = (...args) => {
    let total = 0;
    for( let i = 0; i<args.length; i++){
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(2,6,2,5,8,6));