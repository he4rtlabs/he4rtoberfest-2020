#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

// A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
bool validate_range_digits(char letter, char start_letter, char finish_letter)
{
  return letter >= start_letter && letter <= finish_letter;
}

bool has_digit(char *password, char start_letter, char finish_letter)
{

  for (int index = 0; password[index] != '\0'; index++)
  {
    if (validate_range_digits(password[index], start_letter, finish_letter))
    {
      return true;
    }
  }
  return false;
}

// Além disso, a senha pode ter de 6 a 32 caracteres.

bool check_limits(char *password)
{
  return strlen(password) >= 6 && strlen(password) <= 32;
}

// A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;

bool check_invalid_digits(char *password)
{
  for (int index = 0; password[index] != '\0'; index++)
  {
    if ((validate_range_digits(password[index], 'a', 'z')) ||
        (validate_range_digits(password[index], 'A', 'Z')) ||
        (validate_range_digits(password[index], '0', '9')))
    {
      continue;
    }
    else
    {
      return false;
    }
  }
  return true;
}

#define buffer_size 256
#define validate_password(password)    \
  has_digit(password, 'a', 'z') &&     \
      has_digit(password, 'A', 'Z') && \
      has_digit(password, '0', '9') && \
      check_limits(password) &&        \
      check_invalid_digits(password)

int main(int argc, char const *argv[])
{
  char password[buffer_size];

  while (true)
  {
    printf("Digite a senha:");
    scanf("%s", password);

    if (!strcmp(password, "q"))
    {
      puts("Finalizando iteracao!");
      break;
    }
    else if (validate_password(password))
    {
      puts("Senha Valida!");
    }
    else
    {
      puts("Senha Invalida!");
    }
  }
  return EXIT_SUCCESS;
}
