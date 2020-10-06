<?php 

 $numero = $argv[1];

 function tabuada($numero){
    $i = 1;
    for ($i = 1; $i <= $numero; $i++){
        echo "============================ \n";
        echo "A tabuada do numero $i é: \n";

        $mult = 0;
        for($mult; $mult <= 10; $mult++){
            echo "$i * $mult = " . $i * $mult . "\n";
        }
    }
    echo "============================ \n";
 }

 tabuada($numero);