puts "\n=========== Cálculadora de Média dos Alunos! ==========="

puts "\nInsira o número de alunos da turma: "
begin
  quatidade_alunos = $stdin.gets.chomp.to_i
  puts "\nInsira um valor numérico maior que 0:" if quatidade_alunos == 0 || quatidade_alunos < 0
end while quatidade_alunos == 0 || quatidade_alunos < 0

puts "\nInsira o número de notas do período: "
begin
  quantidade_notas = $stdin.gets.chomp.to_i
  puts "\nInsira um valor numérico maior que 0:" if quantidade_notas == 0 || quantidade_notas < 0
end while quantidade_notas == 0 || quantidade_notas < 0

puts "\n#{quatidade_alunos} aluno(s) na turma"
puts "#{quantidade_notas} nota(s) por aluno"

turma = Array.new(quatidade_alunos, Array.new(quantidade_notas)) # Matriz de alunos (linhas) x notas (colunas)
turma.each_with_index do |aluno, indice|
  puts "\nInsira as notas do aluno #{indice + 1}:"
  nota = 0
  while nota < quantidade_notas
    puts "Nota #{nota + 1}:"
    aluno[nota] = $stdin.gets.chomp.to_f
    nota = nota + 1
  end
  nota = 0
  puts "\nNotas do aluno #{indice + 1}: "
  while nota < quantidade_notas
    puts "Nota #{nota + 1}: #{aluno[nota]}"
    nota = nota + 1
  end
  media = aluno.sum / quantidade_notas
  puts "Média: #{media}"
end
