function fibonacci(number) {
  const values = [0, 1]

  for (let index = 3; index <= number; index++){
    const result = values[values.length - 1] + values[values.length - 2];
    values.push(result)
  }

  console.log(values.join(" "))
}

fibonacci(10)