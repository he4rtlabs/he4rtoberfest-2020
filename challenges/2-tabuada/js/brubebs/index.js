const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Type a number: ', number => {
	if (typeof number !== 'number')
		console.log('You need type an integer number.');

	for (let i = 1; i <= number; i++) {
		for (let j = 0; j <= 10; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
		}
	}
	readline.close();
});