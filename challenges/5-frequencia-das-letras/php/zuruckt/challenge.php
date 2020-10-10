<?php

$message = strtolower($argv[1]);

if (strlen($message) <= 0 || strlen($message) > 200) {
    exit("Insira uma frase com no mínimo 1 e no máximo 200 caracteres!");
}

$letters = array_filter(str_split($message), fn($value) => ctype_alpha($value));

$frequency_map = count_chars(implode($letters), 1);

$sorted = [];

foreach ($frequency_map as $key => $value) {
    $sorted[] = [
        'char' => chr($key),
        'frequency' => $value
    ];
}

usort($sorted, fn($a, $b) => $a['frequency'] <=> $b['frequency']);

$sorted = array_reverse($sorted);

$keys = array_keys(array_column($sorted, 'frequency'), $sorted[0]['frequency']);

$result = '';

foreach($keys as $key) {
    $result = $result . $sorted[$key]['char'];
}

$sortAlpha = str_split($result);
sort($sortAlpha);
echo implode($sortAlpha);
