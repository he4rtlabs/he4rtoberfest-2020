defmodule MediaAluno do
  def build do
    firstNote = read("primeira")
    secondNote = read("segunda")
    IO.puts("Média -> #{(firstNote + secondNote) / 2}")
  end

  defp read(number) do
    IO.gets("Digite a #{number} nota: ")
    |> Float.parse()
    |> validate(number)
  end

  defp validate(:error, number) do
    IO.puts("Informe um numero valido")
    read(number)
  end

  defp validate({value, _}, _), do: value
end

MediaAluno.build()
