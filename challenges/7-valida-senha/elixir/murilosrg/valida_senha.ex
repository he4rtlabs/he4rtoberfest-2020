defmodule ValidaSenha do
  def build do
    read()
    |> validate()
  end

  defp read() do
    IO.gets("Digite a senha: ")
    |> String.trim()
    |> validate()

    is_valid()
  end

  defp validate(pass) do
    pass
    |> validate_required()
    |> validate_invalid_chars()
  end

  defp validate_required(pass) do
    cond do
      String.match?(pass, ~r/^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[0-9]).{6,32}$/) -> pass
      true -> is_invalid()
    end
  end

  defp validate_invalid_chars(pass) do
    chars =
      pass
      |> String.codepoints()

    cond do
      " " in chars -> is_invalid()
      true -> pass
    end
  end

  defp is_valid() do
    IO.puts("Senha válida.")
    exit(:normal)
  end

  defp is_invalid() do
    IO.puts("Senha inválida.")
    exit(:normal)
  end
end

ValidaSenha.build()
