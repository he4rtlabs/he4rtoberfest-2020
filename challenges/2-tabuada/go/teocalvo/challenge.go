package main

import "fmt"

func tabuada(n int) {
	fmt.Println("===========================")
	fmt.Printf("A tabuada do número %d é:\n", n)
	for i := 1; i <= 10; i++ {
		fmt.Printf("  %d*%d = %d\n", n, i, n*i)
	}
}

func main() {
	var numInput int
	fmt.Scanf("%d", &numInput)
	for i := 1; i <= numInput; i++ {
		tabuada(i)
	}
}
