defmodule AreaTrapezio do
  def build do
    larger = read("base maior")
    smaller = read("base menor")
    height = read("altura")
    base = (larger + smaller) * height / 2

    IO.puts("A área do trapézio é: #{base}")
  end

  defp read(number) do
    IO.gets("Digite a #{number}: ")
    |> Float.parse()
    |> validate(number)
  end

  defp validate(:error, number) do
    IO.puts("Informe um numero valido")
    read(number)
  end

  defp validate({value, _}, _), do: value
end

AreaTrapezio.build()
