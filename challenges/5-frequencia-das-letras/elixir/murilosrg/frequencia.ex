defmodule Frequencia do
  def build do
    cases = read("Digite o numero de entradas: ")

    1..cases
    |> Enum.to_list()
    |> Enum.map(fn _ -> process() end)
  end

  defp process() do
    map =
      read_text()
      |> count()

    count =
      map
      |> get_max()

    map
    |> Enum.filter(fn {_, v} -> v == count end)
    |> Enum.map(fn {letter, _} -> letter end)
    |> Enum.to_list()
    |> List.to_string()
    |> IO.inspect()
  end

  defp read_text() do
    IO.gets("Digite o texto: ")
    |> String.trim()
    |> String.downcase()
    |> String.replace(~r/ +/, "")
  end

  defp count(msg) do
    msg
    |> String.graphemes()
    |> Enum.frequencies()
  end

  defp get_max(map) do
    map
    |> Enum.max_by(fn {_, v} -> v end)
    |> get_value()
  end

  defp get_value({_, value}), do: value

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
end

Frequencia.build()
