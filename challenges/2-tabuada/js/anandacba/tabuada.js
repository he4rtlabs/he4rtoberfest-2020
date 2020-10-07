//Variável armazena o valor inserido pelo User
var userInputNumber = 3;

function tabuada(userNumber){

	//Validação se o argumento é um número
	if(isNaN(userNumber)){
		console.log("The value is not a number");
	}else{
		//Criando o cabeçalho da tabuada
		for(let increment = 1; increment <= userNumber; increment ++) {
			console.log(`-------Tabuada of the number ${increment} is:-------`);
	
			//Aritmética
			let count = 1;
			while(count <= 10){
				let result = increment * count
					console.log(`${increment} x ${count} = ${result}`);
				count ++
			};
		};	
	};
};

//Chama a função e passa o valor inserido pelo user para dentro dela
tabuada(userInputNumber);