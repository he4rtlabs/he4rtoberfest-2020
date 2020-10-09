/**
 * Programa para calcular área de um trapézio
 */

var baseMaior = 8, baseMenor = 3, altura = 5;

function calcularTrapezio(baseMaior, baseMenor, altura) {
    var area = (baseMaior + baseMenor) * altura / 2;
    console.log("A área do trapézio é: " + area);
}

if(typeof baseMaior != "number" || 
    typeof baseMenor != "number" || 
    typeof altura != "number") {
    console.log("Por favor, informe números para a área ser calculada.");
} else {
    calcularTrapezio(baseMaior, baseMenor, altura);
}
