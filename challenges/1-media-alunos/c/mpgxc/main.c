#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include "isvalid.h"

#define buffer_size 256

float media_alunos(char const *argv[], int size_arr)
{
  float media = 0;

  for (int index = 0; index < size_arr; index++)
  {
    /* A função atof converte uma String (sequência de caracteres) em Float */
    media += atof(argv[index + 1]);
  }

  return media / size_arr;
}

float iterative_mode()
{
  int index = 0;
  float media_notas = 0;
  char buffer[buffer_size];

  puts("Para finalizar o modo iterativo digite: q");

  while (true)
  {
    printf("Digite um numero:");
    scanf(" %s", buffer);

    if (strcmp(buffer, "q") == 0)
    {
      break;
    }
    else if (checker(buffer))
    {
      media_notas += atof(buffer);
      index += 1;
    }
    else
    {
      puts("Por favor digite numeros!");
    }
  }
  return media_notas / index;
}

int main(int argc, char const *argv[])
{
  if (argc == 1)
  {
    puts("Falta passar os parâmetros!");
    return EXIT_FAILURE;
  }

  int input_size = argc - 1;

  if (check_input_isvalid(argv, input_size))
  {
    printf("Media-> %0.2f\n", media_alunos(argv, input_size));
    return EXIT_SUCCESS;
  }
  puts("Uma entrada invalida ocorreu no CLI. Experimente o modo iteraivo.");
  printf("Media-> %0.2f\n", iterative_mode());

  return EXIT_SUCCESS;
}
