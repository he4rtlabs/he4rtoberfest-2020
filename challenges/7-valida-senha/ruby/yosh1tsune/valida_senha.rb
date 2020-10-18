def senha_valida?(senha)
  if senha.length < 6 || senha.length > 32
    puts "\nSenha inválida. A senha precisa ter entre 6 e 32 caracteres."
    return false
  end

  senha.each_char do |char|
    if !/[A-Z]/.match?(char) && !/[a-z]/.match?(char) && !/[0-9]/.match?(char)
      # Verifica se os caracteres se encontram entre os permitidos
      puts "\nSenha inválida. A senha não pode conter caracteres especiais."
      return false
    end
  end

  if !senha.match?(/[A-Z]/) # Verifica se >NÃO HÁ< nenhum caractere no range especificado
    puts "\nSenha inválida. Não há nenhuma maiúscula."
    return false
  end

  if !senha.match?(/[a-z]/)
    puts "\nSenha inválida. Não há nenhuma minúscula."
    return false
  end

  if !senha.match?(/[0-9]/)
    puts "\nSenha inválida. Não há nenhum número."
    return false
  end
  puts "\nSenha válida."
  return true
end

puts "\n===================== Desafio Validador de Senhas ====================="

begin
  puts "\nInsira uma senha contendo entre 6 e 32 caracteres, "\
       'e ao menos uma letra maiúscula, uma minúscula e um número: '
  nova_senha = gets.chomp
end while senha_valida?(nova_senha) == false
