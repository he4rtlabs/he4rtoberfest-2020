package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	entrada := lerNumero()
	var resultado []string

	for i := 0; i < entrada; i++ {
		resultado = append(resultado, strconv.Itoa(fib(i)))
	}

	fmt.Println(strings.Join(resultado, " "))
}

func lerNumero() int {
	for {
		var entrada int
		fmt.Print("Digite o número: ")
		fmt.Scan(&entrada)

		if entrada <= 0 || entrada > 46 {
			fmt.Print("entrada invalida, deve ser informado um num maior que 0 e menor que 46 \n")
			return lerNumero()
		}

		return entrada
	}
}

func fib(index int) int {
	numA := 0
	numB := 1

	for i := 0; i < index; i++ {
		temp := numA
		numA = numB
		numB = temp + numB
	}

	return numA
}
