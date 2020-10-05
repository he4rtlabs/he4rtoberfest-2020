package main

import "fmt"

func media(nota1, nota2 float32) float32 {
	return (nota1 + nota2) / 2
}

func main() {
	fmt.Println(media(22, 53))
}
