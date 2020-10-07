
function calcAverage(firstNumber,secondNumber){

	//validação do tipo
	if (typeof firstNumber!=='number'||typeof secondNumber!=='number'){
		
		return console.log("Values are not number")
	}else {

		//aritmética
		let sumNumbers = firstNumber + secondNumber
			const average = sumNumbers / arguments.length
		console.log("The average of the values is: " + average)
	};
};

//Passando os valores para dentro da função
calcAverage(22, 53);