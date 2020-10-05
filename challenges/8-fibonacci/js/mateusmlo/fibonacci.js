//solução 1
const fib = (n) => {
	const series = []
	series[0] = 0
	series[1] = 1

	for (i = 2; i <= n; i++) {
		series[i] = series[i - 2] + series[i - 1]
	}

	const seriesStr = series.toString()
	const regex = /(\D)/gm

	return seriesStr.replace(regex, ` `)
}

//solução 2 (recursiva com uso de memoization -ou seja, não trava zap)
const memoize = (fn) => {
	let cache = new Map()

	return (n) => {
		if (cache.has(n)) return cache.get(n)

		let result = fn(n)
		cache.set(n, result)

		return result
	}
}

const fibRecursive = memoize((n) => {
	if (n === 0 || n === 1) return n

	return fibRecursive(n - 1) + fibRecursive(n - 2)
})

console.log('Resultado solução 1:', fib(process.argv.slice(2)[0]))
console.log('\nResultado solução 2:', fibRecursive(process.argv.slice(2)[0]))
