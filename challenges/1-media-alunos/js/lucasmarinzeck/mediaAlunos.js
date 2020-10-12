const readline = require('readline');

let aluno1 = 0;
let aluno2 = 0;

const getMedia = (a1, a2) => {
        const soma = a1 + a2;
        console.log(`\n\nA soma das notas do primeiro aluno: ${a1} e do segundo aluno: ${a2} e igual a ${soma}`);
        return soma / 2;
}

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Entre com a nota do primeiro aluno:\n', (answer1) => {
        aluno1 = Number(answer1);
        reader.question('\n\nEntre com a nota do segundo aluno:\n', (answer2) => {
                aluno2 = Number(answer2);
                console.log(`\n\nA media das duas notas e igual a: ${getMedia(aluno1, aluno2)}`);
                reader.close();
        })
        return aluno1;
})

