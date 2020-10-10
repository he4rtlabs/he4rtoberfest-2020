def frase_valida?(frase)
  if frase.length == 0 || frase.length > 200
    puts "\nFrase inválida. A frase precisa ter entre 1 e 200 caracteres."
    puts "Tamanho da frase: #{frase.length} caracteres"
    return false
  else 
    frase.each_char do |char|
      if (65..90).include?(char.ord) || (97..122).include?(char.ord)
        return true # Valida a frase quando encontrar qualquer letra
      end
    end
  end
  puts "\nFrase inválida. A frase precisa ter pelo menos uma letra."
  return false
end

def verifica_frequencia(frase)
  ocorrencias = 0
  frequencia = {:ocorrencias => 0, :letras => ''}
  frase.each_char do |letra|
    next if !(97..122).include?(letra.ord) || frequencia[:letras].include?(letra) # Se o caractere não for uma letra ou já estiver entre as mais frequentes, passa para o seguinte
    ocorrencias = frase.count(letra)
    if ocorrencias == frequencia[:ocorrencias]
      frequencia[:letras] = frequencia[:letras] + letra
      frequencia[:letras] = frequencia[:letras].chars.sort.join # Reorganiza em ordem alfabética
    elsif ocorrencias > frequencia[:ocorrencias]
      frequencia[:ocorrencias] = ocorrencias
      frequencia[:letras] = letra
    end
  end
  return frequencia
end

puts "\n=================== Desafio frequência das letras ==================="

puts "\nInsira a quantidade de frases que deseja verificar: "
begin
  quantidade_frases = gets.chomp.to_i
  puts "\nValor invalido. Insira um número inteiro maior que 0: " if quantidade_frases <= 0
end while quantidade_frases <= 0

frases = Array.new(quantidade_frases, '')
frases.each_index do |index|
  begin
    puts "\nInsira a #{index + 1}ª frase (A frase precisa ter entre 1 e 200 caracteres): "
    frases[index] = gets.chomp
  end while frase_valida?(frases[index]) == false
end

letras_frequentes = Array.new(quantidade_frases)
frases.each_index do |index|
  letras_frequentes[index] = verifica_frequencia(frases[index].downcase)
end

letras_frequentes.each_index do |index|
  puts "\nCaractere(s) mais presente(s) na #{index + 1}ª frase: "
  puts "'#{letras_frequentes[index][:letras]}' aparecendo #{letras_frequentes[index][:ocorrencias]} vez(es)"
end