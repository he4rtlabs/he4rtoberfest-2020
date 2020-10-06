const maxNumber = Number(process.argv.slice(2));

console.log('===== Tabuada He4rtoberfest =====');

for (let i = 1; i <= maxNumber; i++) {
  console.log(`===== Tabuada do ${i} =====`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}x${j} = ${i * j} `);
  }
  console.log('=========================');
}
