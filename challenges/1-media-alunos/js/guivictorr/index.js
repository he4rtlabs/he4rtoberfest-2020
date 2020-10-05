function arithmeticAverage(...args){
  const result = args.reduce((total, value) => (total += value) / args.length)

  return result
}

console.log(arithmeticAverage(22,53))