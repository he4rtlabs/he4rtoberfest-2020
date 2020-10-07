package main

import (
	"fmt"
	"math"
	"sort"
)

func decrypt(textEncrypted string, nLag int) string {
	alfabeto := []string{"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"}
	textDecrypted := ""

	for _, s := range textEncrypted {
		pos := sort.SearchStrings(alfabeto, string(s))
		newIndex := int(math.Abs(float64((nLag - pos) % len(alfabeto))))
		textDecrypted += alfabeto[newIndex]
	}
	return textDecrypted
}

func getTextToDecrypt() (string, int) {
	numeroPosicoes := 0
	text := ""
	fmt.Print("Frase a ser decriptada: ")
	fmt.Scanf("%s", &text)
	fmt.Print("Número de posições: ")
	fmt.Scanf("%d", &numeroPosicoes)
	return text, numeroPosicoes
}

func main() {
	casos := 0
	fmt.Print("Número de casos: ")
	fmt.Scanf("%d", &casos)
	for i := 1; i <= casos; i++ {
		fmt.Println(decrypt(getTextToDecrypt()))
	}
}
