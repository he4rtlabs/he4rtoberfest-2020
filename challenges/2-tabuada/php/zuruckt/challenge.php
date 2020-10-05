<?php

$num = $argv[1];

if (!is_numeric($num)) {
    echo 'Insira apenas valores numéricos!';
    die;
}

for ($i = 0; $i <= $num; $i++) {
    print('=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~='.PHP_EOL);
    printf('A tabuada do número %s é: '.PHP_EOL, $i);
    for ($j = 1; $j <= 10; $j++) {
        printf('%s * %s = %s'.PHP_EOL, $i, $j, $i * $j);
    }
}
