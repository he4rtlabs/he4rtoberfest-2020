defmodule Fibonacci do
  def build do
    number = read("Digite um numero: ")

    Enum.map(0..number, fn n -> fib(n) end)
    |> Enum.join(" ")
    |> IO.puts()
  end

  defp fib(n) do
    {0, 1}
    |> Stream.unfold(fn {a, b} -> {a, {b, a + b}} end)
    |> Enum.at(n)
    |> Integer.to_string()
  end

  defp read(msg) do
    msg
    |> IO.gets()
    |> Integer.parse()
    |> validate(msg)
  end

  defp validate(:error, msg), do: is_invalid(msg)

  defp validate({value, _}, msg) do
    cond do
      value > 0 && value < 46 -> value
      true -> is_invalid(msg)
    end
  end

  defp is_invalid(msg) do
    IO.puts("Informe um numero valido")
    read(msg)
  end
end

Fibonacci.build()
