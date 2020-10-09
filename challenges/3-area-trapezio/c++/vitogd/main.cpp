#include <iostream>

float areaTrapezio(float bMaior, float bMenor, float alt) {
  return (bMaior + bMenor) * alt / 2;
}

int main() {
  float baseMaior, baseMenor, altura, resultado;

  std::cout << "\nDigite a base maior: ";
  std::cin >> baseMaior;

  std::cout << "Digite a base menor: ";
  std::cin >> baseMenor;

  std::cout << "Digite a altura: ";
  std::cin >> altura;

  resultado = areaTrapezio(baseMaior, baseMenor, altura);

  std::cout << "\nArea do trapezio: " << resultado << std::endl; 
  return 0;
}