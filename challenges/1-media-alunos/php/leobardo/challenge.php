<?php

if($argc !== 3){
    echo 'Passe duas notas como argumentos.';
    exit;
}

$notas = [
    $argv[1],
    $argv[2],
];

foreach ($notas as $key => $value) {
    if(!is_numeric($value)){
        echo 'Passe apenas números como argumentos.';
        exit;
    }

    $notas[$key] = (float)$value;
}

$media = ($notas[0] + $notas[1]) / 2;

echo 'A média deu -> '. $media;
