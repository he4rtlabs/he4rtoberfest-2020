package main

import (
	"fmt"
	"strconv"
)

func main() {
	baseMaior := lerNumero("base maior")
	baseMenor := lerNumero("base menor")
	altura := lerNumero("altura")

	area := (baseMaior + baseMenor) * altura / 2
	fmt.Printf("A área do trapézio é: %.2f", area)
}

func lerNumero(valor string) float64 {
	for {
		fmt.Printf("Digite a %v: ", valor)
		var entrada string
		fmt.Scan(&entrada)

		num, err := strconv.ParseFloat(entrada, 64)

		if err != nil {
			fmt.Print("digite uma entrada valida \n")
			continue
		}

		return num
	}
}
