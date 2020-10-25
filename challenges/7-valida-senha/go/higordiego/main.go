package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"unicode"
)

func main() {

	fmt.Println("Entre com a senha: ")

	senha := leituraDaSenha()

	validando := validador(strings.TrimSpace(senha))

	if validando {
		fmt.Println("Senha valida.")
	} else {
		fmt.Println("Senha invalida.")
	}

}

func validador(senha string) bool {
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

func leituraDaSenha() string {
	senha := ""
	scaner := bufio.NewScanner(os.Stdin)
	if scaner.Scan() {
		senha = scaner.Text()
	}
	return senha
}
