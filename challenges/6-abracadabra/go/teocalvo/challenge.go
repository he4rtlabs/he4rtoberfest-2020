package main

import (
	"fmt"
	"strings"
)

func printCenter(text string, w int) {
	spaces := strings.Repeat(" ", (w-len(text))/2)
	fmt.Println(spaces, text)
}

func printText(text string, w int) {
	textSpaced := strings.Join(strings.Split(text, ""), " ")
	printCenter(textSpaced, w)
}

func main() {
	text := ""
	fmt.Print("Palavra Mágica: ")
	fmt.Scanf("%s", &text)
	fmt.Println()
	w := len(strings.Join(strings.Split(text, ""), " "))
	for ; len(text) >= 1; text = text[:len(text)-1] {
		printText(text, w)
	}
	fmt.Println()
}
