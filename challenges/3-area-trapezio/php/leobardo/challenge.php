<?php

try {
    if($argc !== 4){ 
        throw new Exception('Passe somente três argumentos.');
    }

    $medidas = array_filter($argv, function($element){
        return (!strpos($element, 'challenge.php') && is_numeric($element));
    });

    if(count($medidas) !== 3){
        throw new Exception('Passe apenas números como argumentos.');
    }

    $bMaior = (float)$argv[1];
    $bMenor = (float)$argv[2];
    $altura = (float)$argv[3];
    
    $area = ($bMaior + $bMenor) * $altura / 2;
    echo 'A area do trapézio é -> '.$area;
} catch (Exception $e) {
    echo $e->getMessage();
}
