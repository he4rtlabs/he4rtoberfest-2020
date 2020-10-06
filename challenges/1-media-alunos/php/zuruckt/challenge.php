<?php

$notas = array_filter($argv, function ($valor) {
    return $valor !== 'challenge.php';
});

$media = array_sum($notas) / count($notas);

echo $media;
