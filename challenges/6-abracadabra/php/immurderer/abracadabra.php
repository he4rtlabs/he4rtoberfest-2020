<?php
$entrada = str_split($argv[1]);
$espacos = '';
$tamanhoEntrada = count($entrada);
if($tamanhoEntrada > 1 && $tamanhoEntrada < 101) {
    for($i = 0; $i < $tamanhoEntrada; $i++) {
        echo $espacos . implode(' ', $entrada) . PHP_EOL . PHP_EOL;
        array_pop($entrada);
        $espacos .= ' ';
    }
} else {
    echo 'A entrada deve ter de 2 a 100 caracteres' . PHP_EOL;
}
