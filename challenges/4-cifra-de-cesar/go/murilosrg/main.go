package main

import (
	"bytes"
	"fmt"
	"strings"
)

const asciiA = 97
const asciiZ = 122

func main() {
	var numCasos int
	fmt.Printf("Digite quantos casos de teste: ")
	fmt.Scan(&numCasos)

	for i := 0; i < numCasos; i++ {
		entrada, numPosicoes := lerInputs()
		resultado := converter(strings.ToLower(entrada), numPosicoes)
		fmt.Println(strings.ToUpper(resultado))
	}
}

func lerInputs() (string, int) {
	var numPosicoes int
	fmt.Printf("Digite quantas posições quer inverter: ")
	fmt.Scan(&numPosicoes)

	var entrada string
	fmt.Printf("Digite a palavra a ser criptografada: ")
	fmt.Scan(&entrada)

	return entrada, numPosicoes
}

func converter(entrada string, posicoes int) string {
	var b bytes.Buffer

	for _, v := range entrada {
		pos := v - rune(posicoes)

		if pos < asciiA {
			aux := pos - asciiA + 1
			pos = asciiZ + aux
		}

		b.WriteString(string(pos))
	}

	return b.String()
}
