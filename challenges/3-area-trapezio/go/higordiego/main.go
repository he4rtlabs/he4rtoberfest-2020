package main

import "fmt"

func main() {

	baseMenor := 3.0
	baseMaior := 8.0
	altura := 5.0

	resultado := calculandoTrapezio(altura, baseMenor, baseMaior)

	fmt.Printf("Resultado: %.1f \n", resultado)
}

func calculandoTrapezio(altura, baseMenor, baseMaior float64) float64 {

	return ((baseMaior + baseMenor) * altura) / 2
}
