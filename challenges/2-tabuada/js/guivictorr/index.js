function tabuada(number) {
  for(let num = 1; num <= number ; num++) {
    console.log('=========================')
    console.log(`A Tabuada do ${num}`)
    
    for(let mult = 1; mult <= 10; mult++){
      console.log(`${num} * ${mult} = ${num * mult}`)
    }
  }
}

tabuada(2)