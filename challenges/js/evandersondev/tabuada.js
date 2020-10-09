function table(number) {
  for (let operator = 1; operator <= number; operator++) {
    console.log('='.repeat(20))
    console.log(`A tabuada do ${operator} é: `)

    for (let multiplicator = 1; multiplicator <= 10; multiplicator++) {
      console.log(`${operator} * ${multiplicator} = ${operator * multiplicator}`)
    }
  }
}

table(5)
