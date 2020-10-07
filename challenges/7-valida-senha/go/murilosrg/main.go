package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"unicode"
)

func main() {
	fmt.Print("Informe a senha: ")
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')

	valida := validaSenha(strings.TrimSpace(text))

	if valida {
		fmt.Println("Senha valida.")
	} else {
		fmt.Println("Senha invalida.")
	}
}

func validaSenha(senha string) bool {
	var uppercase, lowercase, number, special, whitespace, accent bool

	for _, c := range senha {
		switch {
		case unicode.IsNumber(c):
			number = true
		case unicode.IsUpper(c):
			uppercase = true
		case unicode.IsLower(c):
			lowercase = true
		case unicode.IsSymbol(c):
			special = true
		case unicode.IsSpace(c):
			whitespace = true
		case unicode.In(c, unicode.Mn):
			accent = true
		}
	}

	if special || whitespace || accent {
		return false
	}

	if len(senha) < 6 || len(senha) > 32 {
		return false
	}

	if !uppercase || !lowercase || !number {
		return false
	}

	return true
}
