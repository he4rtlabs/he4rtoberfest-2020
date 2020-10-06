function media(...args) {
		const sum = args.reduce( (acum, val) => acum+ val, 0);
		return (sum / args.length).toFixed(2);
}

console.log(media(10, 10, 10, 1));

