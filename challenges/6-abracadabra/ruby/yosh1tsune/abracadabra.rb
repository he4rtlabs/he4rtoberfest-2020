puts "\n========================= Desafio Abracadabra ========================="

begin
  puts "\nInsira uma string com ao menos 2 caracteres e sem espaços: "
  palavra = gets.chomp.upcase
  palavra = palavra.delete(' ') # Remove espaços
  puts "\nPalavra inválida! Insira novamente de acordo com as instruções." if palavra.length <= 2
end while palavra.length <= 2

piramide = ''
palavra.each_char do |char|
  piramide = piramide + char + ' '
end
piramide = piramide.chop

while piramide.delete(' ').empty? == false # Verifica se a string se torna vazia removendo os espaços, atestando que não há mais nenhum caractere.
  puts "\n#{piramide}"
  piramide = piramide.prepend(' ') # Adiciona o espaço no começo da string
  piramide = piramide.chop.chop # Corta a última letra e o espaço que sobra
end