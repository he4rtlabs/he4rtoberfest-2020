<?php

// varias notas

if($argc == 1){
    echo 'Passe pelo menos duas notas como argumento.';
    exit;
}

$notas = array_filter($argv, function($element){
    return !strpos($element, 'challenge.php');
});

foreach ($notas as $key => $value) {
    if(!is_numeric($value)){
        echo 'Passe apenas números como argumentos.';
        exit;
    }

    $notas[$key] = (float)$value;
}

$media = array_sum($notas) / count($notas);

echo 'A média deu -> '. $media;
