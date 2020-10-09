puts "Média de alunos: Cálculo"

puts "Insira a primeira nota: "
primeira_nota = gets.chomp.to_i
puts "Insira a segunda nota: "
segunda_nota = gets.chomp.to_i

def calculo(primeira_nota,segunda_nota)
    resultado_final = (primeira_nota + segunda_nota)/2.to_f
    puts "A média das notas #{primeira_nota} e #{segunda_nota} é #{resultado_final}."
end

calculo(primeira_nota,segunda_nota)
