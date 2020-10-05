<?php

$baseMaior = $argv[1];
$baseMenor = $argv[2];
$altura = $argv[3];

if (!is_numeric($baseMaior) || !is_numeric($baseMenor) || !is_numeric($altura)) {
    echo 'Insira apenas valores numéricos!';
    die;
}

$area = (($baseMaior + $baseMenor) * $altura) / 2;

echo $area;
