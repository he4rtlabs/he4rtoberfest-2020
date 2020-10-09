package main

import (
	"fmt"
	"strconv"
)

func main() {
	nota1 := lerNota("primeira")
	nota2 := lerNota("segunda")

	fmt.Printf("Média -> %.2f", (nota1+nota2)/2)
}

func lerNota(posicao string) float64 {
	fmt.Printf("Digite a %v nota: \n", posicao)

	for {
		var entrada string
		fmt.Scan(&entrada)

		nota, err := strconv.ParseFloat(entrada, 64)

		if err != nil {
			fmt.Print("digite uma entrada valida \n")
			continue
		}

		return nota
	}
}
