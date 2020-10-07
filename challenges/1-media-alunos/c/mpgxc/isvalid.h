#include <stdbool.h>

bool checker(const char *arr)
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

bool check_input_isvalid(const char *arr[], int size_input)
{
  for (int index = 0; index < size_input; index++)
  {
    if (!checker(arr[index + 1]))
    {
      return false;
    }
  }
  return true;
}