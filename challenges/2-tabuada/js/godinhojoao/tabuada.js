function multiplicationTable(number) {
    number = parseInt(number);

    for (let i = 1; i <= number; i++) {
        console.log('===========================');
        console.log(`A tabuada do numero ${i} é:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('===========================');
    };
};

multiplicationTable(3);