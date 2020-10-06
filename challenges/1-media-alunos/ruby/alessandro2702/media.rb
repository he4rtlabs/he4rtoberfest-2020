def CalculoMedia(n1,n2)
    result = (n1+n2)/2.to_f
    result.round(2)
end

puts "Digite a primeira nota"
a = gets.chomp.to_i
puts "Digite a segunda nota"
b = gets.chomp.to_i

media = CalculoMedia(a,b)

puts "a média é #{media}"