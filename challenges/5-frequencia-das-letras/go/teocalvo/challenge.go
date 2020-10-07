package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

func countLetters(text string) map[string]int {
	count := make(map[string]int)
	for _, s := range text {
		if string(s) == " " || string(s) == "." || string(s) == "-" || string(s) == "+" {
			continue
		} else {
			count[strings.ToLower(string(s))]++
		}
	}
	return count
}

func getMax(count map[string]int) int {
	max := 0
	for _, v := range count {
		if max < v {
			max = v
		}
	}
	return max
}

func getMaxKeys(count map[string]int) map[string]int {
	max := getMax(count)
	newMap := make(map[string]int)
	for k, v := range count {
		if v == max {
			newMap[k] = v
		}
	}
	return newMap
}

func makeCountProcess(text string) string {
	countMap := countLetters(text)
	maxLetters := ""
	for k := range getMaxKeys(countMap) {
		maxLetters += k
	}
	return maxLetters
}

func makeSort(text string) string {
	stringSlice := strings.Split(text, "")
	sort.Strings(stringSlice)
	return strings.Join(stringSlice, "")
}

func main() {
	nEntradas := 0
	fmt.Print("Número de entradas: ")
	fmt.Scanf("%d", &nEntradas)

	for i := 1; i <= nEntradas; i++ {
		fmt.Println("================================")
		scanner := bufio.NewScanner(os.Stdin)
		fmt.Printf("Entrada %d: ", i)
		if scanner.Scan() {
			text := scanner.Text()
			textMost := makeCountProcess(text)
			textMostSorted := makeSort(textMost)
			fmt.Println(textMostSorted)
		}
	}
}
