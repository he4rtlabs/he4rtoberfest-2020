<?php

$notas = $argv;
$soma = 0;
$qtdNotas = count($notas) - 1;

foreach($notas as $nota){
    if(is_numeric($nota)){
        $soma+= $nota; 
    }
}

$media = $soma / $qtdNotas;

echo "A sua média aritmética é: $media";