fn main() {
    for arg in std::env::args() {
        if valida_senha(&arg) {
            println!("Senha válida");
        } else {
            println!("Senha inválida");
        }
    }
}

#[cfg(test)]
mod tests {
    use super::valida_senha;
    #[test]
    fn is_valid() {
        assert_eq!(valida_senha("123aBc"), true);
        // Sem maiuscula
        assert_eq!(valida_senha("123acc"), false);
        // Sem numero
        assert_eq!(valida_senha("acAAAA"), false);
        // Big
        assert_eq!(valida_senha("acacAAAAacAAAAacAAAAacAAAAacAAAAacAAAAAAAA1"), false);
        // Smol
        assert_eq!(valida_senha("1aB"), false);
    }
}

fn valida_senha(senha: &str) -> bool {
    if !(senha.len() >= 6 && senha.len() <= 32) {
        return false;
    }
    let mut tem_letra_maiuscula = false;
    let mut tem_letra_minuscula = false;
    let mut tem_numero = false;
    for ch in senha.chars() {
        if !is_char_valido(ch) {
            return false;
        }
        if is_letra_maiuscula(ch) {
            tem_letra_maiuscula = true;
        }
        if is_letra_minuscula(ch) {
            tem_letra_minuscula = true;
        }
        if is_numero(ch) {
            tem_numero = true;
        }
    }
    tem_letra_maiuscula && tem_letra_minuscula && tem_numero
}

fn is_char_valido(c: char) -> bool {
    is_letra_maiuscula(c) || is_letra_minuscula(c) || is_numero(c)
}

fn is_letra_maiuscula(c: char) -> bool {
    c as u8 >= 65 && c as u8 <= 90
}

fn is_letra_minuscula(c: char) -> bool {
    c as u8 >= 97 && c as u8 <= 122
}

fn is_numero(c: char) -> bool {
    c as u8 >= 48 && c as u8 <= 57
}
