use std::io;

fn main() {
    println!("Escreva suas notas:");

    let mut entrada = String::new();

    io::stdin()
        .read_line(&mut entrada)
        .expect("Falha na leitura");

    let notas: Vec<f32> = entrada
        .split_whitespace()
        .map(|valor| valor.parse::<f32>().expect("parse error"))
        .collect();

    let media = calcular_media(notas);

    println!("A média de suas notas é {}", media);
}

fn calcular_media(notas: Vec<f32>) -> f32 {
    let total_notas: f32 = notas.iter().sum();

    total_notas / notas.len() as f32
}
