package main

import (
	"fmt"
	"strings"
)

func main() {
	entrada := lerPalavra()
	palavra := strings.Split(entrada, "")

	for i := 0; i < len(entrada); i++ {
		fmt.Println(strings.Join(palavra, " "))
		palavra = append([]string{""}, palavra...)
		palavra = palavra[:len(palavra)-1]
	}
}

func lerPalavra() string {
	for {
		var entrada string
		fmt.Print("Informe a palavra: ")
		fmt.Scan(&entrada)

		if len(entrada) < 2 || len(entrada) > 100 {
			fmt.Print("entrada invalida, deve conter entre 2 e 100 caracteres \n")
			return lerPalavra()
		}

		return entrada
	}
}
