const calculateTrapeze = trapezeArr => {
  if (trapezeArr.length !== 3)
    throw new Error('This function only require 3 (three) arguments.');

  if (!trapezeArr.every(number => number.match(/\d/)))
    throw new Error('This function only accepts numbers in arguments');

  const [majorBase, minorBase, height] = trapezeArr.map(num => Number(num));
  const trapezeArea = (majorBase + minorBase) * height / 2;

  console.log(`The area of trapeze is: ${trapezeArea}`);
}

calculateTrapeze(process.argv.slice(2));
