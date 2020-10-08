<?php

try{
    if(count($argv) !== 2 || !is_numeric($argv[1])) throw new Exception('Informe apenas um número, para exibição da tabuada');

    $tabuada = $argv[1];
    
    for ($i = 0; $i < $tabuada; $i++) 
    {
        $numero = $i+1;
        echo '-------------------------------------------------------------' . PHP_EOL;
        echo "A tabuada do número {$numero}:" . PHP_EOL;
        echo '-------------------------------------------------------------' . PHP_EOL;
        for ($multiplicador = 1; $multiplicador <= 10; $multiplicador++) {   
            $resultado = $numero * $multiplicador;
            echo "{$numero} x {$multiplicador} = {$resultado}" . PHP_EOL;
        }
    }

} catch (Exception $e){
    echo $e->getMessage() . PHP_EOL;
}