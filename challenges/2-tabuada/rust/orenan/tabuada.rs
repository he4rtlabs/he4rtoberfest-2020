use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let valor = args[1].parse::<i32>().unwrap();

    println!("===========================");
    
    for i in 0..valor {
        let valor = i + 1;
        
        println!("A tabuada do numero {} é:", valor);
        
        for j in 1..11 {
            let multiplicador = j;
            let resultado = valor * multiplicador;

            println!("{} * {} = {}", valor, multiplicador, resultado);
        }
        
        println!("===========================");
    }
}