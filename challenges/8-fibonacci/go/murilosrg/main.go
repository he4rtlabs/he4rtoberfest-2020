package main

import (
	"fmt"
	"strconv"
)

func main() {
	var entrada int
	fmt.Print("Digite o número: ")
	fmt.Scan(&entrada)

	var resultado string

	for i := 0; i < entrada; i++ {
		resultado = resultado + strconv.Itoa(fib(i)) + " "
	}

	fmt.Println(resultado[:len(resultado)-1])

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
