<?php

$num = $argv[1];

    for($i = 1; $i <= $num; $i++ ){
        echo "===========================<br>" .
             "A tabuada do número $i é:<br>";
             for($j = 1; $j <= 10; $j++){
                 echo $i . "*" . $j . " = " . ($i*$j) . "<br>";
             }
    }

    echo "===========================";

?>