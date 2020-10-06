<?php
if (sizeof($argv) < 4)
{
    echo 'FALTAM ARGUMENTOS';
    exit(); 
}

$baseMaior = $argv[1];
$baseMenor = $argv[2];
$altura = $argv[3]; 


if (!is_numeric($baseMaior) OR !is_numeric($baseMenor) OR !is_numeric($altura))
{
    echo 'INSIRA 3 NÚMEROS POR FAVOR';
    exit();
}


$area = ($baseMaior + $baseMenor) * $altura / 2;

echo "A área do trapézio é: {$area}";