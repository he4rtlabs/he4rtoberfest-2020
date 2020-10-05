function multiplicationTable(number) {
    number = parseInt(number);

    for (let i = 1; i <= number; i++) {
        console.log('===========================');
        console.log(`A tabuada do numero ${i} é:`);
        console.log(`${i} * 1 = ${i * 1}`);
        console.log(`${i} * 2 = ${i * 2}`);
        console.log(`${i} * 3 = ${i * 3}`);
        console.log(`${i} * 4 = ${i * 4}`);
        console.log(`${i} * 5 = ${i * 5}`);
        console.log(`${i} * 6 = ${i * 6}`);
        console.log(`${i} * 7 = ${i * 7}`);
        console.log(`${i} * 8 = ${i * 8}`);
        console.log(`${i} * 9 = ${i * 9}`);
        console.log(`${i} * 10 = ${i * 10}`);
        console.log('===========================');
    };
};

multiplicationTable(3);