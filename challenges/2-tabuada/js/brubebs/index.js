function multiplicationTable(number) {
	if (typeof number === 'string' || number < 0 || isNaN(number))
		return 'You need type an integer number.';

	for (let i = 1; i <= number; i++) {
		for (let j = 0; j <= 10; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
		}
	}
}

multiplicationTable(2);
