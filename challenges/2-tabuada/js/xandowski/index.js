const tabuada = (n) => {
  for(let i = 1; i <= n; i++){
    console.log(`A tabuada do número ${i} é: `)
    for(let j = 1; j < 11; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("===========================")
  }
  return 'He4rtoberfest!!';
}

console.log(tabuada(2));