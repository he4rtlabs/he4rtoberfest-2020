<?php
$notaAlunoUm = $argv[1];
$notaAlunoDois = $argv[2];

$mediaAlunos = ($notaAlunoUm + $notaAlunoDois) / 2;

echo "Média -> {$mediaAlunos}";