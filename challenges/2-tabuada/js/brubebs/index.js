function multiplicationTable(number) {
  if (isNaN(number)) return 'You need type an integer number.';
  
	const formatNumber = parseInt(number);

	for (let j = 1; j <= formatNumber; j++) {
		for (let i = 0; i <= 10; i++) {
			console.log(`${j} x ${i} = ${j * i}`);
		}
	}
}

multiplicationTable(2);
