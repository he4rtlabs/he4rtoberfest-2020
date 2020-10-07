const prompt = require('prompt-sync')();

function decodeCipher(numberOfPositions, message) {

    if (numberOfPositions < 0 || numberOfPositions > 25) {
        return 'O número de posições precisa ser entre 0 e 25.';
    };

    let messageLetters = message.split('');
    let asciiLetters = messageLetters.map(letter => letter.charCodeAt());
    let newLettersAscii = asciiLetters.map(asciiLetter => {
        let currentPosition = asciiLetter - numberOfPositions;

        // pega a diferença entre 65 ('A') na tabela ASCII e subtrai de 91 que equivale a dec. de "Z" + 1 ;
        if (currentPosition < 65) {
            currentPosition = 91 - (65 - currentPosition);
        };

        return currentPosition;
    });

    let decipheredWord = newLettersAscii.map(letter => String.fromCharCode(letter)).join('').toUpperCase();

    return decipheredWord;
};

const numberOfCases = prompt('Quantos casos você deseja testar? ');

for (let i = 0; i < numberOfCases; i++) {
    const numberOfPositions = prompt('Quantas posições deseja modificar (0 a 25)? ');
    const message = prompt('Qual mensagem deseja codificar? ');

    console.log(decodeCipher(numberOfPositions, message));
};