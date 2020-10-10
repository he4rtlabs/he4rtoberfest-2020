function fibonacci(number) {
  const values = [0, 1]

  if(number > 46 || number <= 0) {
    return 'Apenas número maior que 0 e menor que 46'
  }

  for (let index = 3; index <= number; index++){
    const result = values[values.length - 1] + values[values.length - 2];
    values.push(result)
  }

  return values.join(" ")
}

console.log(fibonacci(0))
console.log(fibonacci(47))
console.log(fibonacci(10))