/**
 * 
 *  Script javascript para calcular a área de um trapezio
 * 
 *  Como usar: node index.js {baseMaior} {baseMenor} {altura}
 * 
 *  Ex: node index.js 10 10 10
 *  Result: 100 
 * 
 */

const calculate = (...numbers) => {
  const [ baseMaior, baseMenor, altura ] = numbers
  const filterOnlyNumbers = numbers.filter(n => !Number.isNaN(Number(n)))
  if (filterOnlyNumbers.length !== 3) return 'Insira somente números - Verifique os parametros e tente novamente.'
  const filterPositiveNumbers = filterOnlyNumbers.filter(n => Number(n) > 0);
  if (filterPositiveNumbers.length !== 3) return 'Somente números positivos são permitidos - Verifique os parâmetros e tente novamente.'
  return ((Number(baseMaior) + Number(baseMenor)) * Number(altura) / 2)
}
const inputs = process.argv.splice(2)
if (inputs.length !== 3) return console.log('Número de parâmetros inválido')
console.log(calculate(...inputs))