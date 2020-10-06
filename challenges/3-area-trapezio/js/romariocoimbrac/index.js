function areaTrapezio(baseMaior, baseMenor, altura) {
  //Verificações
  if (arguments.length !== 3)
    return console.log(
      "Quantidade de argumentos invalida! Tente 3 argumentos: baseMaior, baseMenor e altura",
    );
  else if (
    typeof baseMaior !== "number" ||
    typeof baseMenor !== "number" ||
    typeof altura !== "number"
  )
    return console.log(
      "Utilize apenas números! Tente 3 argumentos: baseMaior, baseMenor e altura",
    );
  //Calculo
  let area = ((baseMaior + baseMenor) * altura) / 2;
  return console.log(`A área do trapézio é: ${area}`);
}

areaTrapezio(8, 3, 5);
