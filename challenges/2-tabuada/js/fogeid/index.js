function tabuada(num) {
    console.log("===========================================");
    console.log(`A tabuada do número ${num} é:`);

    for (var i = 0; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }

    console.log("===========================================");
    return 'by Fogeid';
}

console.log(tabuada(5));