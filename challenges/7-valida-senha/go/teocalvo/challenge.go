package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {

	upperCase := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"                          // must
	lowerCase := "abcdefghijklmnopqrstuvwxyz"                          // must
	numbersCase := "0123456789"                                        //must
	symbols := ".;:?!~`´^ +-*áéíóúâêîôûãẽĩõũàèìòùÁÉÍÓÚÂÊÎÔÛÃẼĨÕŨÀÈÌÒÙ" // must not

	senha := ""
	scaner := bufio.NewScanner(os.Stdin)
	if scaner.Scan() {
		senha = scaner.Text()
	}

	flags := []bool{}
	flags = append(flags, strings.ContainsAny(senha, upperCase))
	flags = append(flags, strings.ContainsAny(senha, lowerCase))
	flags = append(flags, strings.ContainsAny(senha, numbersCase))
	if len(senha) >= 6 && len(senha) <= 32 {
		flags = append(flags, true)
	} else {
		flags = append(flags, false)
	}
	flags = append(flags, strings.ContainsAny(senha, symbols))

	if flags[0] && flags[1] && flags[2] && flags[3] && !flags[4] {
		fmt.Println("Senha válida!")
	} else {
		fmt.Println("Senha inválida!")
	}

}
