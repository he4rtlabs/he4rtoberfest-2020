
const fibonacci = (rep) => {
 let arr = [];   
 let a = 0;
 let b = 1;
 for (let i = 0; i < rep; i++){
    arr.push(a)
    auxiliar = a + b
    a = b
    b = auxiliar
}
    console.log(`Sequência de Fibonacci: ${arr}`)
}

fibonacci(process.argv[2]);

