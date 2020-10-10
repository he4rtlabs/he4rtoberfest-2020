#include <stdbool.h>

bool checker_type(const char *arr)
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