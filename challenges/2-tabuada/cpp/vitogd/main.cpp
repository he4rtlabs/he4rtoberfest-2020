#include <iostream>

void calcularTabuada(int p) {
  for (int i = 1; i <= p; i++) {  
    std::cout << "\n===========================";
    std::cout << "\nA tabuada do numero " << i << " eh:\n" << std::endl;

    for (int j = 1; j <= 10; j++)
      std::cout << i << " x " << j << " = " << i * j << std::endl;
  }
  std::cout << "===========================";
}

int main() {
  int parada;

  std::cout << "Digite a parada da tabuada: ";
  std::cin >> parada;

  calcularTabuada(parada);
  return 0;
} 