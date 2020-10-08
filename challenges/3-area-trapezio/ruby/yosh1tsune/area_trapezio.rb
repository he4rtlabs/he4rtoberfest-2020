puts "\n=============== Desafio cálculo da área de um trapézio ==============="

def verifica_input()
  begin 
    input = gets.chomp.to_f # O método to_f converte tudo para float, se for não-numérico converte para 0.
    puts "\nValor inválido. Insira um valor numérico maior que 0: " if input <= 0
  end while input <= 0
  return input
end

puts "\nInsira as informações sobre o trapézio: "

puts "\nBase maior (valor numérico maior que 0): "
base_maior = verifica_input()

puts "\nBase menor (valor numérico maior que 0): "
base_menor = verifica_input()

puts "\nAltura (valor numérico maior que 0): "
altura = verifica_input()

area_trapezio = ((base_maior + base_menor) * altura) / 2

puts "\nA área do trapézio é de: #{area_trapezio}"