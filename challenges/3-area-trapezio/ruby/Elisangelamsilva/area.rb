puts "Área de um trapézio"
puts "Por favor, insira números maiores que zero."

def verifica()

  begin 
    valores_entrada = gets.chomp.to_f
    puts "Inválido. " if valores_entrada <= 0

  end while valores_entrada <= 0
  return valores_entrada
end

puts "\nBase maior: "
baseMaior = verifica()

puts "\nBase menor:  "
baseMaior = verifica()

puts "\nAltura: "
altura = verifica()


area = ((baseMaior + baseMaior) * altura) / 2

puts "O valor final da área do trapézio é #{area}"