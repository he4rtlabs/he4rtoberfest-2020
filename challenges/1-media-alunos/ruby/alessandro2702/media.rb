def CalculoMedia(n1,n2)
    result = (n1+n2)/2.to_f
    result.round(2)
end

media = CalculoMedia(22,53)

puts "a média é #{media}"