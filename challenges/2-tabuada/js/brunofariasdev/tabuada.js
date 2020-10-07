let tabuada = prompt("Digite ate qual tabuada deseja ver!");
let multiplicando = 1;

for (let i = 1; i <= tabuada; i++) {
    console.log("===========================");
    console.log("A tabuada do número " + multiplicando + " é:");
    
    
    for ( let y = 0; y <= 10; y++) {
        var result = multiplicando * y;
        console.log( multiplicando + " x " + y + " = " + result);
    }
    multiplicando++;
}

console.log("Obrigado por testar <3 ");