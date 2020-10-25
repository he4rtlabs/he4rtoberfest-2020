package main

import "fmt"

func main() {

	numerosTabuada := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}

	for _, i := range numerosTabuada {
		fmt.Printf("Tabuada do: %v \n\n", i)
		imprimindoTabuada(i)
		fmt.Printf("\n")
	}
}

func imprimindoTabuada(num int) {
	for i := 1; i <= 10; i++ {
		fmt.Printf("%v*%v = %v \n", num, i, (num * i))
	}
}
