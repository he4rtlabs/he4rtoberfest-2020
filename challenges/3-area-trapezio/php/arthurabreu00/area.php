<?php

// Formula: (baseMaior + baseMenor) * altura / 2

try {
    $valores = $argv;
    array_shift($valores); // Na primeira posição, sempre ficará o comando a ser executado.

    $filtrados = array_filter($valores,'is_numeric');
    if(count($filtrados) !== 3){
        throw new Exception('É necessário informar 3 números para realizar o calulo.');
    }

    list($baseMaior, $baseMenor, $altura) = $valores; 

    $area = ($baseMaior + $baseMenor) * $altura / 2;
    echo "A área do trapezio é: $area" . PHP_EOL;

} catch (Exception $exception){
    echo $exception->getMessage();
}



