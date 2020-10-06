package main

import (
	"fmt"
	"strings"
)

func main() {

	type entrada struct {
		mensagem       string
		numeroPosicoes int
	}

	var entradas []entrada
	var saidas []string

	var numeroCasos int
	fmt.Print("Número de casos: ")
	fmt.Scanf("%d", &numeroCasos)

	// Lê as entradas
	for i := 0; i < numeroCasos; i++ {
		var msg string
		var np int

		fmt.Print("Mensagem: ")
		fmt.Scanf("%s", &msg)
		fmt.Print("Número de posições: ")
		fmt.Scanf("%d", &np)

		entradas = append(entradas, entrada{mensagem: msg, numeroPosicoes: np})
	}

	// Decifra as entradas
	for i := 0; i < len(entradas); i++ {

		entrada := entradas[i]
		mensagemEntrada := entrada.mensagem
		numeroPosicoes := entrada.numeroPosicoes

		var letraSlice []string

		for j := 0; j < len(mensagemEntrada); j++ {
			letraEntradaASCII := int(mensagemEntrada[j])
			letraSaidaASCII := ((letraEntradaASCII - 65) - numeroPosicoes) % 26

			if letraSaidaASCII < 0 {
				letraSaidaASCII = 91 - (-letraSaidaASCII)
			} else {
				letraSaidaASCII = 65 - (-letraSaidaASCII)
			}

			letraSaida := string(letraSaidaASCII)
			letraSlice = append(letraSlice, letraSaida)
		}

		mensagemSaida := strings.Join(letraSlice, "")

		saidas = append(saidas, mensagemSaida)
	}

	// Imprime as saídas
	for i := 0; i < len(saidas); i++ {
		fmt.Printf("Decifrado: %s\n", saidas[i])
	}

}
