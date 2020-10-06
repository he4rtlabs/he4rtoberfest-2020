package main

import "fmt"

func getNumbers() []float64 {
	var notas []float64
	var n float64
	fmt.Print("Entre com suas notas (caso não queira mais inserir notas, aperte enter)\n")
	for i := 1; true; i++ {
		fmt.Printf("Nota %d: ", i)
		_, err := fmt.Scanf("%f", &n)
		if err != nil {
			break
		}
		notas = append(notas, n)
	}
	return notas
}

func avg(notas []float64) float64 {
	soma := 0.
	for _, n := range notas {
		soma += n
	}
	return soma / float64(len(notas))
}

func main() {
	notas := getNumbers()
	media := avg(notas)

	fmt.Printf("Media -> %.2f\n", media)

}
