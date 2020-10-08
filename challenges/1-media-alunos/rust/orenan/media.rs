use std::io;

fn main() {
    println!("Escreva suas notas:");

    let mut entrada = String::new();

    io::stdin()
        .read_line(&mut entrada)
        .expect("Falha na leitura");

    let notas: Vec<usize> = entrada
        .split_whitespace()
        .map(|valor| valor.parse().expect("parse error"))
        .collect();
    
    let media = calcular_media(notas);
    println!("A média de suas notas é {}", media);
}

fn calcular_media(notas: Vec<usize>) -> usize {
    let total_notas = notas.iter().fold(0, |acumulador, valor| acumulador + valor);
    
    total_notas / notas.len()
}
