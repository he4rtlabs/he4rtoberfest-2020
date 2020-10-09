<?php
$numero = intval($argv[1]);

function exibirFibonacci(array $fibonacci) {
    foreach ($fibonacci as $f) {
        echo $f . ' ';
    }
}

if ($numero >= 46 OR $numero <= 0)
{
    echo 'Número inválido';
    exit();
}

$resultadosFibonacci = [0];

for ($i = 1; $i < $numero; $i++)
{
    if ($i == 1)
    {
        array_push($resultadosFibonacci, $i);
    } else {
        $resultado = $resultadosFibonacci[$i-1] + $resultadosFibonacci[$i-2];
        array_push($resultadosFibonacci, $resultado);
    }
}

exibirFibonacci($resultadosFibonacci);