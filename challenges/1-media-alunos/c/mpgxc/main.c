#include <stdio.h>
#include <stdlib.h>

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

int main(int argc, char const *argv[])
{
  if (argc == 1)
  {
    puts("Falta passar os parâmetros!");
    return EXIT_FAILURE;
  }

  float media_notas = media_alunos(argv, argc - 1);

  printf("Media-> %0.2f\n", media_notas);

  return EXIT_SUCCESS;
}
