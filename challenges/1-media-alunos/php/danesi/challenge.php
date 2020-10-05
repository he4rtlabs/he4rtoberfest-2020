<?php

$soma = 0;
foreach ($argv as $nota) {
    if ($nota != 'challenge.php') {
        $soma += $nota;
    }
}

$media = $soma / (count($argv) - 1);

echo "Sua média é $media";
