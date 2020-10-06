package main

import "fmt"

func main() {
	var n1, n2 float64

	fmt.Print("Entre com a primeira nota: ")
	fmt.Scanf("%f", &n1)

	fmt.Print("Entre com a segunda nota: ")
	fmt.Scanf("%f", &n2)

	media := (n1 + n2) / 2.

	fmt.Printf("Média -> %.2f\n", media)
}
