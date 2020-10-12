function areaTrapezio(baseMaior, baseMenor, altura) {
    if (arguments.length !== 3)
        return console.log("Quantidade de valores inválido.");
    else if (
        typeof baseMaior !== "number" ||
        typeof baseMenor !== "number" ||
        typeof altura !== "number"
    )
        return console.log("Utilize apenas números!");
    let area = ((baseMaior + baseMenor) * altura) / 2;
    return console.log(`A área do trapézio é: ${area}`);
}

areaTrapezio(8, 3, 5);
