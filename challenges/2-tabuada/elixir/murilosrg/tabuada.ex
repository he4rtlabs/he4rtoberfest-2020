defmodule Tabuada do
  def build do
    number = read()

    1..number
    |> Enum.to_list()
    |> Enum.map(fn x -> print(x) end)
  end

  defp print(number) do
    IO.puts("\n =========================== \n")
    IO.puts("A tabuada de #{number} é: \n")

    1..10
    |> Enum.to_list()
    |> Enum.map(fn x -> IO.puts("#{number} x #{x} = #{number * x}") end)
  end

  defp read() do
    IO.gets("Digite o numero: ")
    |> Integer.parse()
    |> validate()
  end

  defp validate(:error) do
    IO.puts("Informe um numero valido")
    read()
  end

  defp validate({value, _}), do: value
end

Tabuada.build()
