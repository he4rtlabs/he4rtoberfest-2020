package main

import (
	"fmt"
	"strconv"
)

func main() {
	num := lerNumero()

	for i := 1; i <= num; i++ {
		imprimirTabuada(i)
	}
}

func lerNumero() int {
	fmt.Print("Digite o numero: ")

	for {
		var entrada string
		fmt.Scan(&entrada)

		num, err := strconv.Atoi(entrada)

		if err != nil {
			fmt.Print("digite uma entrada valida \n")
			continue
		}

		return num
	}
}

func imprimirTabuada(num int) {
	fmt.Printf("\nA tabuada do numero %v é: \n", num)
	for i := 1; i <= 10; i++ {
		fmt.Printf("%v*%v = %v \n", num, i, (num * i))
	}
}
