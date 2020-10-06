const calculateTrapezoidArea = (largerBase, smallerBase, height) => {
  try {
    if (isNaN(largerBase || smallerBase || height)) {
      throw 'Apenas números são aceitos, altere os valores e tente novamente!';
    }

    return console.log((largerBase + smallerBase) * height / 2);
  } catch (error) {
    return console.log(error);
  }
};

//erro no parametro
calculateTrapezoidArea('exception error', 20, 1.8);
//sucesso, apenas numeros passados
calculateTrapezoidArea(8, 3, 5);
