function tabuada(inputNumber){
    for (let index = 1; index <= inputNumber ; index++) {
        console.log('=================================')
        console.log(`A tabuada do numero ${index} é:`)
        for (let j = 1; j <= 10 ; j++) {
            resp = j * index;
            console.log(`${index} * ${j} = ${resp} `)
        }
    }
}

tabuada(3);