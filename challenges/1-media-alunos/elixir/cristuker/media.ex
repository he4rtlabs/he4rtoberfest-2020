IO.puts "Calculador de média"
n1 = IO.gets "Digite a primeira nota\n-> "
n2 = IO.gets "Digite a segunda nota \n-> "
{n1Int,_} = :string.to_integer(n1)
{n2Int,_} = :string.to_integer(n2)
total = n1Int+n2Int
media = div(total, 2)

IO.puts media
