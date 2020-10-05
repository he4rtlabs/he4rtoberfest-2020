function trapezoidArea(largerBase, smallerBase, height) {
    for (let argument of arguments) {
        if (typeof argument !== 'number') {
            return 'Valor inválido, utilize apenas números.';
        };
    };

    let area = ((largerBase + smallerBase) * height / 2);

    return area;
};

console.log(trapezoidArea(8, 3, 5));
console.log(trapezoidArea(8, 'a', 5)); // teste para o tratamento de erro