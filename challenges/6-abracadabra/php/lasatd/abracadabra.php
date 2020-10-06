<?php

function espaco($n){
    for($j = 0; $j < $n; $j++){
        echo ' ';
    }
}

$string = $argv[1];
$k = 0;

$string = wordwrap($string, 1, ' ', true);

for($i = strlen($string); $i > 0; $i--){
    espaco($k);
    echo $string . PHP_EOL;
    $string = substr($string, 0, strlen($string)-1);
    if(substr($string, -1) == ' '){
        $string = rtrim($string);    
    }
    $k++;
}