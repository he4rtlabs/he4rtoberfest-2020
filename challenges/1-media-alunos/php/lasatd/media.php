<?php

$notas = $argv;

$soma = 0;

for($i = 1; $i < $argc; $i++){
    $soma += $notas[$i];
}

echo $soma/($i-1);