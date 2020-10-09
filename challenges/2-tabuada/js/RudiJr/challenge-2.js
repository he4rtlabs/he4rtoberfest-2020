function DesafioTab(numb) {
    for(let n = 1; n <= numb ; n++) {
      console.log('=========================')
      console.log(`Tabuada do ${n}`)
      
      for(let multi = 1; multi <= 10; multi++){
        console.log(`${n} * ${multi} = ${n * multi}`)
      }
    }
  }
  
  DesafioTab(2)