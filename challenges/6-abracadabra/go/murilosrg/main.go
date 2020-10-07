package main

import (
	"fmt"
	"strings"
)

func main() {
	var entrada string
	fmt.Print("Informe a palavra: ")
	fmt.Scan(&entrada)
	palavra := strings.Split(entrada, "")

	for i := 0; i < len(entrada); i++ {
		fmt.Println(strings.Join(palavra, " "))
		palavra = append([]string{""}, palavra...)
		palavra = palavra[:len(palavra)-1]
	}
}
