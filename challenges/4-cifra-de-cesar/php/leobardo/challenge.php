<?php

try {
    if (!is_numeric($argv[1])) {
        throw new Exception('O número de casos deve ser um número. (dã ?)');
    }

    $numeroCasos = (int)$argv[1];

    echo 'ENTRADAS' . PHP_EOL . PHP_EOL;
    for ($i = 0; $i < $numeroCasos; $i++) {
        echo 'Entrada número ' . ($i + 1) . PHP_EOL;
        $mensagens[] = readline('Digite a mensagem: ');

        if (!ctype_alpha($mensagens[$i])) {
            throw new Exception('A mensagem deve conter apenas letras.');
        }

        $numeroPosicoes[] = readline('Digite a quantidade de posições que deve ser pulada: ');

        if (!is_numeric($numeroPosicoes[$i])) {
            throw new Exception('A quantidade de posições a ser pulada deve ser um número.');
        }
        echo PHP_EOL;
    }

    echo 'SAÍDAS' . PHP_EOL . PHP_EOL;
    for ($i = 0; $i < $numeroCasos; $i++) {
        echo 'Saída número ' . ($i + 1) . PHP_EOL;
        $numeroPosicao = (int)$numeroPosicoes[$i];
        $mensagem = str_split(strtoupper($mensagens[$i]));

        array_map(function ($element) use ($numeroPosicao) {
            $ordLetra = ord($element);
            $calcOrd = $ordLetra - $numeroPosicao;

            if ($calcOrd < 65) {
                $numeroPosicao = abs($calcOrd - 64);
                $calcOrd = abs($numeroPosicao - 90);
            }

            $novaLetra = chr($calcOrd);
            echo $novaLetra;
        }, $mensagem);
        echo PHP_EOL . PHP_EOL;
    }
} catch (Exception $e) {
    echo 'Por favor, tente novamente. '.$e->getMessage();
}
