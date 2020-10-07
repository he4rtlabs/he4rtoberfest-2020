#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <stdbool.h>

#define buffer_size 256

bool check_input_isvalid(const char *arr)
{
  for (int index = 0; arr[index] != '\0'; index++)
  {
    if (arr[index] < '0' || arr[index] > '9')
    {
      return false;
    }
  }
  return true;
}

void print_sequence(int number)
{
  for (int i = 1; i <= 10; i++)
  {
    printf("%d*%d = %d\n", number, i, (number * i));
  }
}

void print_tabuada(int limit)
{
  for (int index = 1; index <= limit; index++)
  {
    puts("===========================");
    printf("A tabuada do numero %d é:\n", index);
    print_sequence(index);
  }
}

int main(int argc, char const *argv[])
{
  if (argc == 1)
  {
    puts("Falta passar os parâmetros!");
    return EXIT_FAILURE;
  }

  if (check_input_isvalid(argv[1]))
  {
    print_tabuada(atoi(argv[1]));
    return EXIT_SUCCESS;
  }

  char buffer[buffer_size];
  while (true)
  {
    printf("Digite um numero:");
    scanf("%s", buffer);
    if (check_input_isvalid(buffer))
    {
      print_tabuada(atoi(buffer));
      break;
    }
  }

  return EXIT_SUCCESS;
}
