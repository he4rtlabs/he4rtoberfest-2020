package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"sort"
	"strings"
)

func main() {
	var numCasos int
	fmt.Printf("Digite quantos casos de teste: ")
	fmt.Scan(&numCasos)

	for i := 0; i < numCasos; i++ {
		entrada := bufio.NewReader(os.Stdin)
		fmt.Print("\n Digite texto de entrada: ")
		texto, _ := entrada.ReadString('\n')

		ocorrencias := registrarOcorrencias(strings.ToLower(texto))
		maiorOcorrencia := getMaxOcorrencia(ocorrencias)
		letras := getLetrasMaiorOcorrencia(maiorOcorrencia, ocorrencias)
		imprimirResultado(letras)
	}
}

func registrarOcorrencias(entrada string) map[string]int {
	dict := make(map[string]int)
	valid := regexp.MustCompile(`^[a-z]$`)

	for _, v := range entrada {
		if valid.MatchString(string(v)) {
			dict[string(v)] = dict[string(v)] + 1
		}
	}

	return dict
}

func getMaxOcorrencia(ocorrencias map[string]int) int {
	max := 0
	for _, v := range ocorrencias {
		if v > max {
			max = v
		}
	}

	return max
}

func getLetrasMaiorOcorrencia(max int, ocorrencias map[string]int) []string {
	var res []string

	for k, v := range ocorrencias {
		if max == v {
			res = append(res, k)
		}
	}

	return res
}

func imprimirResultado(letras []string) {
	sort.Strings(letras)
	for _, v := range letras {
		fmt.Printf("%v", v)
	}
}
