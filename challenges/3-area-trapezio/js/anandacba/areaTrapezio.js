//Pegando input do user e transofrando um número.
const userInput = process.argv.splice(2)
const userInputToNumber = userInput.map(Number);

function areaTrapezio(largeBase,smallBase,height){
	//verificando os argumentos
	for(let verifyIn of arguments){
		if(isNaN(verifyIn)){return console.log("Error, please enter only type number.")}
			if(typeof verifyIn !== 'number'){return console.log("Error, please enter only type number.")
		};
	};
	if (userInputToNumber.length !== 3){
		return console.log("Please, enter 3 arguments!")
	};
	//Regra de negócio
	const area = (largeBase + smallBase) * height / 2
	console.log(`The area of trapeze is: ${area}`)
};
//Passando os argumentos para função
areaTrapezio(...userInputToNumber)