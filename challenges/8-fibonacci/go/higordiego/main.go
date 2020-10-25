package main

import "fmt"

func main() {

	varlorDeEntrada := lerEntrada()

	for i := 0; i < varlorDeEntrada; i++ {
		fmt.Print(fibonaci(i), " ")
	}

}

func lerEntrada() int {
	for {
		var valorDeEntrada int
		fmt.Print("Entre com o número: ")
		fmt.Scan(&valorDeEntrada)

		if valorDeEntrada <= 0 || valorDeEntrada > 46 {
			fmt.Print("Entrada inválida! \n")
			return lerEntrada()
		}

		return valorDeEntrada
	}
}

func fibonaci(n int) int {
	if n < 2 {
		return 0
	} else if n == 2 {
		return 1
	}
	return fibonaci(n-1) + fibonaci(n-2)
}
