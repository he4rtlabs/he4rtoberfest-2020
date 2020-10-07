const number = Number(process.argv.slice(2));

function table(number) {
    console.log(`A tabuada do numero ${number} é: `);
    for (let i = 1; i < 11; i++) {
        console.log(`  ${number}*${i} = ${number * i}`);
    }
}

console.log("===========================");
for (let i = 1; i < number + 1; i++) {
    table(i)
    console.log("===========================");
}
