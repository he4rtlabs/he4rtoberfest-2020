#include <iostream>

int main()
{
    float baseMaior, baseMenor, altura;

    std::cout << "Insira o valor da base maior: ";
    std::cin >> baseMaior;
    std::cout << "Insira o valor da base menor: ";
    std::cin >> baseMenor;
    std::cout << "Insira o valor da altura: ";
    std::cin >> altura;

    std::cout << "A área do trapézio é: " << (baseMaior + baseMenor) * altura / 2 << std::endl;
}
