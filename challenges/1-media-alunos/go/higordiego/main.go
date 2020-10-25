package main

import "fmt"

func main() {

	variasNotas := []float64{7, 8, 2}

	resultado := calculando(variasNotas)

	fmt.Printf("Resultado do calculo da média é: %.2f\n", resultado)
}

func calculando(notas []float64) float64 {
	indicador := 0.

	for _, nota := range notas {
		indicador += nota
	}
	return indicador / float64(len(notas))
}
