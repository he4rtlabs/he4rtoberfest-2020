<?php

function cesar($texto, $casas) {
    $saida = '';
    $texto = strtoupper($texto);
    for($i = 0; $i < strlen($texto); $i++) {
        $char = ord($texto[$i]);
        $char = ($char - $casas + 65) % 26 + 65;
        $saida .= chr($char);
    }
    return $saida;
}


$quantidadeDeEntradas = $argv[1];
if(!is_numeric($quantidadeDeEntradas)) {
    echo 'Entrada inválida';
    die();
};

echo '==================================================' . PHP_EOL;

for($i = 0; $i < $quantidadeDeEntradas; $i++) {
    $texto = readline('Texto a ser cifrado: ');
    $casas = intval(readline('Quantidade de casas: '));
    
    if(is_string($texto) && is_integer($casas)) {
        echo 'Decifrado: ' . cesar($texto, $casas) . PHP_EOL;
        echo '==================================================' . PHP_EOL;
    } else {
        echo 'Entrada inválida';
    }
}