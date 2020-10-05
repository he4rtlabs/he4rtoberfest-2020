function mediaAlunos(firstNote, secondNote) {
    if (typeof firstNote !== 'number' || typeof secondNote !== 'number') {
        return 'Valor inválido, utilize apenas números.';
    };

    return (firstNote + secondNote) / 2;
};

console.log(mediaAlunos(22, 53)); // 37.5
console.log(mediaAlunos(22, 'a')); // valor inválido test