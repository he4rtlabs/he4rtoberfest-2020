
//Pode enviar diversos valores para argumento
function calcAverage(inputNumber){
	//validação do tipo
	for (let verifyIn of arguments) {
		if (typeof verifyIn !== 'number'){
			return console.log("Values are not number!")
		};
	};
	//aritmética
	let sumNumber = 0;
	for (let count = 0; count <= arguments.length -1; count ++){	
		sumNumber = sumNumber + arguments[count]
	};
	const average = sumNumber / arguments.length
	console.log("The average of the values is: " + average)
};
//Passando os valores para dentro da função
calcAverage(22,53);