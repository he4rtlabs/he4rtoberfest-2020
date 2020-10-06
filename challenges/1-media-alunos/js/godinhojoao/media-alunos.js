function averageStudent(...notes) {
    let average;
    let sumAllNotes = 0;

    for (let i = 0; i < notes.length; i++) {
        if (typeof notes[i] !== 'number') {
            return 'Valor inválido, utilize apenas números.';
        } else {
            sumAllNotes += notes[i];
        };
    };

    average = sumAllNotes / (notes.length);

    return average;
};

console.log(averageStudent(22, 53, 10, 23, 231)); // 67.8
console.log(averageStudent(22, 53)); // 37.5
console.log(averageStudent(22, 'a')); // valor inválido test