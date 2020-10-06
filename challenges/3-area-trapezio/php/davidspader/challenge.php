<?php

$baseMaior = $argv[1];
$baseMenor = $argv[2];
$altura = $argv[3];

if(!is_numeric($baseMaior) || !is_numeric($baseMenor) || !is_numeric($altura)){
    $resultado = 'Eai primo, as entradas aceitas são apenas números!'; 
}else{
    $resultado = ($baseMaior + $baseMenor) * $altura / 2;
}

echo $resultado;

