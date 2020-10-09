const args = (process.argv.slice(2));
const largerBase = Number(args[0]);
const smallerBase = Number(args[1]);
const height = Number(args[2]);

function getArea(largerBase, smallerBase, height) {
    area = (largerBase + smallerBase) * height / 2;
    if (isNaN(area) == true) {
        return "Um dos argumentos não era um número";
    }

    return `A área do trapézio é: ${area}`;
}

console.log(getArea(largerBase, smallerBase, height));
