#include <iostream>

int main() {
  int a = 0, b = 1, c = 0;
  int n;

  std::cout << "Quantos numeros Fibonacci deseja gerar? ";
  std::cin >> n;

  if (n <= 0 || n >= 46) {
    std::cout << "Valor inválido!";
    return EXIT_FAILURE;
  }

  for (int i = 0; i < n; i++) {
    c = (a + b);
    a = b;
    b = c;

    std::cout << c << std::endl;
  }

  return EXIT_SUCCESS;
}