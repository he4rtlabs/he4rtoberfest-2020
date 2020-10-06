const largerBase = process.argv[2];
const smallerBase = process.argv[3];
const height = process.argv[4];

const calculateTrapezoidArea = (largerBase, smallerBase, height) => {
  try {
    if (isNaN(largerBase && smallerBase && height)) {
      throw 'Apenas números são aceitos, altere os valores e tente novamente!';
    }

    return console.log((largerBase + smallerBase) * height / 2);
  } catch (error) {
    return console.log(error);
  }
};

//chamando a funcao passando os parametros enviados no comando do node
calculateTrapezoidArea(largerBase, smallerBase, height);
