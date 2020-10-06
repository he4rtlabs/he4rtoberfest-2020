/**
 * Script desenvolvido em javascript 
 * para calcular a média das notas
 * passadas por parametro na linha de comando.
 * 
 * Exemplo: node index.js 10 20 30 40
 * Result: Nota média do aluno: 25
 */

const sumAllNumbers = (...args) => {
  if (!Array.isArray(args)) return 0;
  const getOnlyNumbers = args.filter(arg => !Number.isNaN(Number(arg)))
  const total = getOnlyNumbers.reduce((acc, current) => {
    return Number(acc) + Number(current)
  },[])
  return (total / getOnlyNumbers.length)
}

const numbers = process.argv.splice(2);

if (numbers.length < 2) return console.log('Insira duas ou mais notas para calcular.')

console.log(`Nota média do aluno: ${sumAllNumbers(...numbers)}`)
