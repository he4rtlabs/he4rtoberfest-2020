function averageStudent(firstNote, secondNote) {
    if (typeof firstNote !== 'number' || typeof secondNote !== 'number') {
        return 'Valor inválido, utilize apenas números.';
    };

    return (firstNote + secondNote) / 2;
};

console.log(averageStudent(22, 53)); // 37.5
console.log(averageStudent(22, 'a')); // valor inválido test