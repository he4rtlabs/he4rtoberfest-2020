<?php

$palavra = trim($argv[1]);
$letras = str_split($palavra);
$tamanhoString = count($letras);

function abracadabra($letras, $tamanhoString) {
    $espaco = '';
    $triangulo = '';
    for ($i = 1; $i <= $tamanhoString; $i++) {
        $triangulo.= $espaco . implode(' ', $letras) . $espaco . PHP_EOL;
        $espaco .= ' ';
        array_pop($letras);
    }
    return $triangulo;
}

if($tamanhoString >= 2 && $tamanhoString <= 100){
    echo abracadabra($letras, $tamanhoString);
}else {
    echo 'A palavra deve conter entre 2 e 100 caracteres';
}


