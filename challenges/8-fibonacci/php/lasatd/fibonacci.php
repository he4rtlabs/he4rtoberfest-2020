<?php

$num = $argv[1];
$f[0] = 0;
$aux = 0;

if($num >= 46 || $num <= 0){
    echo 'Número inválido';
} else{   
    echo $f[0];
    for($i = 1; $i < $num; $i++){
        if($i == 1){
            $f[$i] = $i;
            echo ' ' . $f[$i] . ' ';
        } else{
            $aux = $f[$i-1] + $f[$i-2];
            echo $aux . ' ';
            $f[$i] = $aux;
        }
    }
}