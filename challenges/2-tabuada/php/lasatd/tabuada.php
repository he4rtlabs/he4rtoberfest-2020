<?php

$num = $argv[1];

for($i = 1; $i <= $num; $i++ ){
    echo '===========================' . PHP_EOL .
            "A tabuada do número $i é:" . PHP_EOL;
            
    for($j = 1; $j <= 10; $j++){
        echo $i . '*' . $j . ' = ' . ($i*$j) . PHP_EOL;
    }
    
}

echo '===========================';