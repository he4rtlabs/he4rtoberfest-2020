def media():
    n_alunos = int(input('Informe o número de alunos: '))
    n_notas = int(input('Informe o número de notas: '))
    for i in range(n_alunos):
        total = 0
        print(f'Aluno {i + 1}:')
        for k in range(n_notas):
            nota = int(input(f'Informe a {k + 1} nota: '))
            total += nota
        calculo = total / n_notas
        print(f'O aluno {i + 1} teve média: {calculo}')


media()
