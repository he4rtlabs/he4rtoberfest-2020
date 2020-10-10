
//Variável armazena o valor inserido pelo User
let userInput = process.argv.splice(2)
let userInputToNumber = Number(userInput)

function tabuada(userNumber){
	//Validação se o argumento é um número
	if(isNaN(userNumber)){
		console.log("The value isn't a number, please enter a number");
	}else{
		//Criando o cabeçalho da tabuada
		for(let numberOfTabuada = 1; numberOfTabuada <= userNumber; numberOfTabuada ++) {
			console.log(`-------Tabuada of the number ${numberOfTabuada} is:-------`);
			//Regra de negócio
			let oneToTen = 1;
			while(oneToTen <= 10){
				let result = numberOfTabuada * oneToTen
					console.log(`${numberOfTabuada} x ${oneToTen} = ${result}`);
				oneToTen ++
			};
		};	
	};
};
//Chama a função e passa o valor inserido pelo user para dentro dela
tabuada(userInputToNumber);