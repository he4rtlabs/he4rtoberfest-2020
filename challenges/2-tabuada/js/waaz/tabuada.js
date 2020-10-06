
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Digite um numero: `, (n1) => {
   
    for(m = 1; m<=n1;m++){
      console.log(`A tabuada do numero ${m} é`)
      for(n=1;n<=10;n++){
        console.log(`${m} * ${n} = ${n*m}`)
      }
      console.log('=====================')
    }
    
    readline.close()
  })
