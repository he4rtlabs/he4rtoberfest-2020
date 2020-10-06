<?php
	
	//Recebe valores do terminal e coloca dentro de suas respectivas variáveis
	$bMaior = $argv[1];
	$bMenor = $argv[2];
	$altura = $argv[3];

	//Verifica se o valor inserido é númerico
	if (!is_numeric($bMaior) || !is_numeric($bMenor) || !is_numeric($altura)) {

		//retorna relatório de erro
	    echo PHP_EOL . 'Por favor, insira um valor numérico!' . PHP_EOL;
	    return false;

	}else{

		//equação efetuada com sucesso
		$area = (($bMaior + $bMenor) * $altura) / 2;
		echo PHP_EOL . 'Resultado: ' . $area . PHP_EOL;
	}

	
