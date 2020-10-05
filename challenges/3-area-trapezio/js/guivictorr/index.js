function trapezoidArea(largerBase, smallerBase, height) {
    for(let argument of arguments) {
        if(typeof argument !== 'number') return `Valor '${argument}' inválido, utilize números`
    }

    const area = (largerBase + smallerBase) * height / 2

    return area
}

console.log(trapezoidArea(8,10,5))
console.log(trapezoidArea(8,'z','y'))