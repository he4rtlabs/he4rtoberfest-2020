<?php
$pontoInicial = $argv;

$notas = [];

foreach ($pontoInicial as $nota) {
    if (!is_numeric($nota))
    {
        continue;
    }
    
    array_push($notas, $nota);
}

$quantidadeNotas = count($notas);

$mediaAluno = array_sum($notas) / $quantidadeNotas;

echo "A média do aluno foi de {$mediaAluno}";