<?php
$quantidadeTabuada = $argv[1];

for ($i = 1; $i <= $quantidadeTabuada; $i++) 
{
    echo "A tabuada do número {$i} é:\n";
    for ($j = 1; $j <= 10; $j++) {   
        $resultado = $i * $j;
        echo "{$i}x{$j} = {$resultado}\n";
    }
}