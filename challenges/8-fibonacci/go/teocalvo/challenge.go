package main

import "fmt"

func fib(n int) int {
	if n < 2 {
		return 0
	} else if n == 2 {
		return 1
	}
	return fib(n-1) + fib(n-2)
}

func main() {
	n := 0
	fmt.Scanf("%d", &n)
	for i := 1; i <= n; i++ {
		fmt.Print(fib(i), " ")
	}
	fmt.Println("")
}
