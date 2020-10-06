<?php

if(!is_numeric($argv[1])){
    echo 'Passe um número como argumento.';
    exit;
}

$limite = (int)$argv[1];

for ($multiplicando = 1; $multiplicando <= $limite; $multiplicando++) {
    echo '●▬▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬▬●'.PHP_EOL;
    echo "Tábuada do número $multiplicando".PHP_EOL;
    for ($multiplicador = 1; $multiplicador <= 10; $multiplicador++) { 
        echo "$multiplicando x $multiplicador = ".$multiplicando * $multiplicador.PHP_EOL;
    }
    echo PHP_EOL;
}

