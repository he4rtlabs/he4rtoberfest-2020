def mensagem_valida?(mensagem)
  mensagem.each_char do |char|
    if !(65..90).include?(char.ord) # Verifica se o valor decimal do caractere está no range dos valores decimais das letras de A(65) a Z(90) na tabela ASCII
      puts "\nA mensagem não pode ter números. Insira novamente: "
      return false
    end
    return true
  end
end

def decodifica_caractere(caractere, posicoes)
  while posicoes > 0
    caractere = caractere.ord - 1
    caractere = 90 if caractere == 64 # Caso o valor decimal do caractere saia do range da tabela ASCII descrito na função acima, ele recebe o valor da letra Z
    posicoes = posicoes - 1
  end
  return caractere.chr # Retorna a letra correspondente ao valor decimal armazenado acima
end

puts "\n==================== Desafio cifra de César ===================="

puts "\nInsira a quantidade de casos que deseja decodificar: "
begin 
  casos = gets.chomp.to_i
  puts "\nValor inválido! Insira um valor numérico maior ou igual a 0: " if casos <= 0
end while casos <= 0

originais = Array.new(casos) {Hash.new} # Cria um array com hashs vazios
decodificadas = Array.new(casos, '') # Cria um array com strings vazias

originais.each_index do |index|
  begin
    puts "\nInsira a #{index + 1}ª mensagem a ser decodificada: "
    originais[index][:mensagem] = gets.chomp.upcase # Insere chave e valor no Hash vazio
    valida = mensagem_valida?(originais[index][:mensagem])
  end while valida == false

  puts "\nInsira a quantidade de posições que deseja recuar: "
  originais[index][:posicoes] = gets.chomp.to_i
end

originais.each_index do |index|
  originais[index][:mensagem].each_char do |char|
    decodificadas[index] = decodificadas[index] + (decodifica_caractere(char, originais[index][:posicoes]))
  end
  puts "\n#{index + 1}ª mensagem decodificada: #{decodificadas[index]}"
end