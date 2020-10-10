#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include "isvalid.h"

#define buffer_size 256
#define validate_input_limit(number) \
  (0 < number) && (number < 46)

int fib(int n)
{
  if (n == 0 || n == 1)
  {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

void print_sequence(int n_limit)
{
  for (int index = 0; index < n_limit; index++)
  {
    printf(" %d", fib(index));
  }
}

int main(int argc, char const *argv[])
{

  if (argc == 1)
  {
    puts("Falta passar os parâmetros!");
    return EXIT_FAILURE;
  }

  char input_number[buffer_size];

  strcpy(input_number, argv[1]);

  while (true)
  {
    if (checker_type(input_number) && validate_input_limit(atoi(input_number)))
    {
      print_sequence(atoi(input_number));
      break;
    }
    else
    {
      printf("Digite um numero valido: ");
      scanf(" %s", input_number);
    }
  }

  return EXIT_SUCCESS;
}
