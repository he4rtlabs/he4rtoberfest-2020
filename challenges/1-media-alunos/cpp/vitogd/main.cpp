#include <iostream>

float mediaAluno(float nota1, float nota2) {
  return (nota1 + nota2) / 2;
}

int main() {
  float n1, n2;

  std::cout << "Insira a nota 1: ";
  std::cin >> n1;

  std:: cout << "Insira a nota 2: ";
  std::cin >> n2;

  if (n1 && n2) {
    const float media = mediaAluno(n1, n2);
    std::cout << "\nMedia -> " << media << std::endl;
  } else {
    std::cout << "Insira as duas notas!";
  }

  return 0;
}