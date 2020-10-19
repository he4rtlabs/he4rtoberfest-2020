package main

import "fmt"

var cases, displacement int
var message string

func main() {

	fmt.Scan(&cases)

	for cases != 0 {
		fmt.Scan(&message, &displacement)
		runes := []rune(message)

		for i := 0; i < len(runes); i++ {
			runes[i] = runes[i] - rune(displacement)

			if runes[i] < 'A' {
				runes[i] = 'Z' - ('A' - (runes[i] + 1))
			}
		}
		fmt.Println(string(runes))
		cases--
	}
}

