const calculateAverage = args => {
  if (!args.every(num => num.match(/\d/)))
    throw new Error("You can use only numbers in parameters!");

  const reducedArgs = args
    .map(num => Number(num))
    .reduce((total, currentNumber) => total + currentNumber, 0);

  console.log(`The average is: ${reducedArgs / args.length}`);
};

calculateAverage(process.argv.slice(2));