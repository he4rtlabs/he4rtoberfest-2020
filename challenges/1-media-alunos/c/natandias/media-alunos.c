#include <stdio.h>
#include <stdlib.h>

int main()
{
  /*
   Usaremos ponteiros para poder definir
   dinamicamente (em tempo de execução)
   a quantidade de notas que serão inseridas
  */

  // Inicializando variáveis
  int quantidadeAlunos;
  int contador = 0;
  float somaDasNotas = 0;

  // Criando um ponteiro
  float *notas;

  // Recebendo o input da quantidade de alunos
  printf("Digite a quantidade de alunos: \n");
  scanf("%d", &quantidadeAlunos);

  /*
  --- Alocando o espaço na memória ---
  Como cada nota de aluno é um valor float,
  precisaremos multiplicar a quantidade de alunos pelo
  tamanho em bytes de uma variável do tipo float, sendo esse o espaço que
  será alocado na memória do computador

  a função malloc é a responsável por reservar o espaço na memória,
  ela retorna um ponteiro do tipo void e
  (float *) serve para fazer o 'casting' do tipo do ponteiro para float
  */
  notas = (float *)malloc(quantidadeAlunos * sizeof(float));

  // Fazemos um for para receber os valores digitados
  for (contador = 0; contador < quantidadeAlunos; contador++)
  {
    printf("Digite a nota do %dº aluno: \n", contador + 1);
    scanf("%f", &notas[contador]);
  }

  // Iteramos sobre o vetor, somando as notas de todos os alunos
  for (contador = 0; contador < quantidadeAlunos; contador++)
  {
    somaDasNotas += notas[contador];
  }

  printf(
      "A media das notas entre os %d alunos eh: %.1f",
      quantidadeAlunos,
      (somaDasNotas / quantidadeAlunos));

  /* 
  A função free serve para liberar o espaço que foi alocado para o ponteiro,
  evitando que o programa continue ocupando espaço na memória, 
  mesmo depois de terminado sua execução
  */
  free(notas);

  return 0;
}