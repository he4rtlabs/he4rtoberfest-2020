import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual a primeira nota do aluno? ', (answer1) => {
    rl.question('Qual a segunda nota do aluno? ', (answer2) => {
        var result = ((+answer1) + (+answer2)) / 2;
        console.log(`A média das notas é ${result}`);
        rl.close();
    });
});