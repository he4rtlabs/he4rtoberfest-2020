defmodule Abracadabra do
  def build do
    word = read()

    word
    |> process(String.length(word), String.length(word))
  end

  defp read() do
    IO.gets("Digite a palavra: ")
    |> String.trim()
    |> validate()
  end

  defp validate(word) do
    cond do
      String.length(word) > 2 && String.length(word) < 100 ->
        word

      true ->
        IO.puts("Palavra invalida \n")
        read()
    end
  end

  #     String.length(word) < 100 -> word
  #     true -> IO.puts("Digite uma palavra valida \n") |> read()
  #   end
  # end

  def process(_, count, _) when count <= 0 do
  end

  def process(word, count, len) do
    word
    |> remove_char(count)
    |> format(len)
    |> IO.puts()

    process(word, count - 1, len)
  end

  defp format(word, count) do
    spaces = format_spaces(word, count)
    word = formart_word(word)

    "#{spaces}#{word}"
  end

  defp format_spaces(word, count) do
    0..(count - String.length(word))
    |> Enum.map(fn _ -> " " end)
    |> List.to_string()
  end

  defp formart_word(word) do
    word
    |> String.upcase()
    |> String.codepoints()
    |> Enum.map(fn letter -> "#{letter} " end)
    |> List.to_string()
  end

  defp remove_char(word, count) do
    word
    |> String.reverse()
    |> String.slice((String.length(word) - count)..-1)
    |> String.reverse()
  end
end

Abracadabra.build()
