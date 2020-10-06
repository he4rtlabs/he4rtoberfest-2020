package main

import (
	"fmt"
	"strconv"
)

func getNumber(msg string) float64 {
	var nString string
	for {
		fmt.Printf(msg)
		fmt.Scanf("%s", &nString)
		n, err := strconv.ParseFloat(nString, 64)
		if err != nil {
			fmt.Print("Entre com um número válido!\n")
			continue
		}
		return n
	}
}

func main() {
	baseMaior := getNumber("Entre com a base maior do trapézio: ")
	baseMenor := getNumber("Entre com a base menor do trapézio: ")
	altura := getNumber("Entre com a altura do trapézio: ")
	fmt.Printf("A área do trapézio é: %.2f\n", (baseMaior+baseMenor)*altura/2.)
}
