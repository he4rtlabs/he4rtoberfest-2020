<?php
$numeroTabuada = $argv[1];
$limiteTabuada = $argv[2];

echo "A tabuada do número {$numeroTabuada} é:\n";
for ($i = 1; $i <= $limiteTabuada; $i++) 
{
    $resultado = $limiteTabuada * $i;
    echo "{$numeroTabuada}x{$i} = {$resultado}\n";
}