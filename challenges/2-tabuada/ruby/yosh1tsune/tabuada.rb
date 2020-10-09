puts "\n================ Desafio Tabuada ================"

begin
  puts "\nInsira até qual número você deseja ver a tabuada: "
  quantidade = gets.chomp.to_i
end while quantidade <= 0 
tabuada = 1

while tabuada <= quantidade
  multiplicador = 1
  puts "\n===== Tabuada do #{tabuada} =====\n\n"
  while multiplicador <= 10
    puts "  #{tabuada}   *   #{multiplicador}   =   #{tabuada * multiplicador}"
    multiplicador = multiplicador + 1
  end
  puts "\n========================\n\n"
  tabuada = tabuada + 1
end
