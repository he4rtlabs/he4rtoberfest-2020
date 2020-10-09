defmodule CifraCesar do
  def build do
    cases = read("Digite o numero de casos: ")

    1..cases
    |> Enum.to_list()
    |> Enum.map(fn _ -> cripto() end)
  end

  defp cripto() do
    input = IO.gets("Digite o texto: ")
    pos = read("Digite quantas posições quer inverter: ")

    input
    |> String.trim()
    |> String.downcase()
    |> to_charlist()
    |> Enum.map(fn x -> invert(pos, x) end)
    |> List.to_string()
    |> String.upcase()
    |> IO.puts()
  end

  defp read(msg) do
    msg
    |> IO.gets()
    |> Integer.parse()
    |> validate(msg)
  end

  defp validate(:error, msg) do
    IO.puts("Informe um numero valido")
    read(msg)
  end

  defp validate({value, _}, _), do: value

  defp invert(pos, value) do
    {pos, value}
    |> calculate_position()
  end

  defp calculate_position({pos, value}) do
    num = value - pos

    cond do
      num < 97 -> 123 + (num - 97)
      true -> num
    end
  end
end

CifraCesar.build()
